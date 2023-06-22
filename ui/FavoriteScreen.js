import React, { useState, useEffect } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import AppScreen from '../components/AppScreen';
import ListItem from '../components/list/ListItem';
import ListItemReport from '../components/list/ListItemReport';
import AppAsyncStore from '../assets/data/AppAsyncStore';
import EmptyList from '../components/list/EmptyList';
import colors from '../config/colors';

function FavoriteScreen({ navigation }) {
    const [dataset, setDataset] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (data) => {
        setDataset(dataset.filter((d) => d.id !== data.id));
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            retrieveData();
        });

        return unsubscribe;
    }, [navigation]);

    const retrieveData = async () => {
        try {
            const { itemDataset } = await AppAsyncStore.retrieveData();
            setDataset(itemDataset.filter((item) => item.favorite === true));
        } catch (error) {
            console.log('Error retrieving data:', error);
        }
    };

    const handleFavorite = async (data) => {
        const updatedData = dataset.map((item) =>
            item.id === data.id ? { ...item, favorite: !item.favorite } : item
        );
        data.favorite = !data.favorite;
        setDataset(updatedData);
        await AppAsyncStore.updateDataItem(data);
    };

    return (
        <AppScreen>
            <View style={styles.headerContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/images/logo.png')}
                    resizeMode="contain"
                />
                <Text style={styles.headerTitle}>Favorites</Text>
            </View>
            <View style={styles.container}>
                {dataset.length > 0 ? (
                    <FlatList
                        data={dataset}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <ListItem
                                title={item.title}
                                subtitle={item.subtitle}
                                handleFavorite={() => handleFavorite(item)}
                                isFavorite={item.favorite}
                                onPress={() => navigation.navigate('Favorite Detail', { item })}
                                image={item.image}
                                renderRightActions={() => (
                                    <ListItemReport
                                        icon="restore-from-trash"
                                        onPress={() => handleDelete(item)}
                                    />
                                )}
                            />
                        )}
                        refreshing={refreshing}
                        onRefresh={() => retrieveData()}
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
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 10
    },
    logo: {
        width: 150,
        height: 50,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },
    container: {
        paddingTop: 5,
        width: '100%',
        height: '100%',
    },
});

export default FavoriteScreen;
