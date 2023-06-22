import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppScreen from '../components/AppScreen';
import { Ionicons } from '@expo/vector-icons';
import routes from '../navigation/routes';
import AppCard from './../components/card/AppCard';
import ListItemReport from './../components/list/ListItemReport';
import AppAsyncStore from '../assets/data/AppAsyncStore';
import EmptyList from '../components/list/EmptyList';

function HomeScreen({ navigation }) {
    const [filterData, setFilterData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');


    useEffect(() => {
        retrieveData();
        storeData();
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            retrieveData();
        });

        return unsubscribe;
    }, [navigation]);
    
    useEffect(() => {
        retrieveData();
        setRefreshing(false);
    }, [refreshing]);

    useEffect(() => {
        handleCategoryPress(selectedCategory);
    }, [selectedCategory]);

    const storeData = async () => {
        try {
            await AppAsyncStore.storeData();
        } catch (error) { }
    };

    const retrieveData = async () => {
        try {
            const { itemDataset, categories } = await AppAsyncStore.retrieveData();
            setFilterData(itemDataset);
            setCategories(categories);
            console.log('Item dataset:', itemDataset);
        } catch (error) {
            console.log('Error retrieving data:', error);
        }
    };

    const handleDelete = (data) => {
        setFilterData((prevData) => prevData.filter((d) => d.id !== data.id));
    };

    const handleFavorite = async (data) => {
        const updatedData = filterData.map((item) =>
            item.id === data.id ? { ...item, favorite: !item.favorite } : item
        );
        data.favorite = !data.favorite;
        setFilterData(updatedData);
        await AppAsyncStore.updateDataItem(data);
    };

    const handleCategoryPress = async (itemValue) => {
        setSelectedCategory(itemValue);
        console.log('Category selected:', itemValue);
        const { itemDataset } = await AppAsyncStore.retrieveData();
        const filteredData =
            itemValue === 'all'
                ? itemDataset
                : itemDataset.filter((item) => item.subtitle === itemValue);

        setFilterData(filteredData);
    };

    const renderCategoryItem = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.categoryItem,
                item.value === selectedCategory && styles.selectedCategoryItem,
            ]}
            onPress={() => handleCategoryPress(item.value)}
        >
            <Text
                style={[
                    styles.categoryItemText,
                    item.value === selectedCategory && styles.selectedCategoryItemText,
                ]}
            >
                {item.label}
            </Text>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => (
        <AppCard
            handleFavorite={() => handleFavorite(item)}
            isFavorite={item.favorite}
            title={item.title}
            subtitle={item.subtitle}
            onPress={() => navigation.navigate(routes.PRODUCT_DETAIL_SCREEN, { item })}
            image={item.image}
            renderRightActions={() => (
                <ListItemReport icon="report" onPress={() => handleDelete(item)} />
            )}
        />
    );



    return (
        <AppScreen>
            <View style={styles.categoriesContainer}>
                <FlatList
                    data={categories}
                    keyExtractor={(item) => item.value.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderCategoryItem}
                />
            </View>
            <View style={styles.container}>
                {filterData.length > 0 ? (
                    <FlatList
                        data={filterData}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItem}
                        refreshing={refreshing}
                        onRefresh={() => setRefreshing(true)}
                    />
                ) : (
                    <EmptyList />
                )}
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    categoriesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    categoryItem: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        marginRight: 10,
        backgroundColor: '#f2f2f2',
    },
    selectedCategoryItem: {
        backgroundColor: '#007bff',
    },
    categoryItemText: {
        fontSize: 16,
        color: '#333',
    },
    selectedCategoryItemText: {
        color: '#fff',
    },
    container: {
        flex: 1,
        width: "90%"
    }
});

export default HomeScreen;
