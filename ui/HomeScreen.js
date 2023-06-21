import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppScreen from '../components/AppScreen';
import routes from '../navigation/routes';
import AppCard from './../components/card/AppCard';
import ListItemReport from './../components/list/ListItemReport';

const initDataset = [
    {
        id: 1,
        image: require("../assets/images/background.jpg"),
        title: "Somthing to exchange 1",
        subtitle: "Clothing",
        favorite: false
    },
    {
        id: 2,
        image: require("../assets/images/background.jpg"),
        title: "Somthing to exchange 2",
        subtitle: "Clothing",
        favorite: false
    },
    {
        id: 3,
        image: require("../assets/images/background.jpg"),
        title: "Somthing to exchange 3",
        subtitle: "Furniture",
        favorite: false
    }
];

const categories = [
    { label: "All", value: "all" },
    { label: "Furniture", value: "Furniture" },
    { label: "Clothing", value: "Clothing" },
    { label: "Camera", value: "Camera" },
];

function HomeScreen({ navigation }) {
    const [dataset, setDataset] = useState(initDataset);
    const [refreshing, setRefreshing] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("all");

    const handleDelete = (data) => {
        setDataset(dataset.filter((d) => d.id !== data.id));
    };

    const handleFavorite = (data) => {
        setDataset((prevDataset) =>
            prevDataset.map((item) =>
                item.id === data.id ? { ...item, favorite: !item.favorite } : item
            )
        );
    };

    const handleCategoryPress = (itemValue) => {
        setSelectedCategory(itemValue);
        console.log("Category selected ", itemValue)
        const filteredData =
            itemValue === "all"
                ? initDataset // If "All" category is selected, show all data
                : initDataset.filter((item) => item.subtitle === itemValue);

        setDataset(filteredData);
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
                <FlatList
                    data={dataset}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <AppCard
                            handleFavorite={() => handleFavorite(item)}
                            isFavorite={item.favorite}
                            title={item.title}
                            subtitle={item.subtitle}
                            onPress={() =>
                                navigation.navigate(routes.PRODUCT_DETAIL_SCREEN, { item })
                            }
                            image={item.image}
                            renderRightActions={() => (
                                <ListItemReport
                                    icon="report"
                                    onPress={() => handleDelete(item)}
                                />
                            )}
                        />
                    )}
                    refreshing={refreshing}
                    onRefresh={() => console.log("refresh")}
                />
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    categoriesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    categoryItem: {
        paddingHorizontal: 10,
        paddingVertical: 5,
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
        padding: 15,
        width: "100%"
    },
});

export default HomeScreen;
