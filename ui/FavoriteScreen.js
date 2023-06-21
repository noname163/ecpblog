import React, { useState, useEffect } from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import AppScreen from '../components/AppScreen';
import ListItem from '../components/list/ListItem';
import ListItemReport from '../components/list/ListItemReport';
import AppAsyncStore from '../assets/data/AppAsyncStore';

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
            console.log("Item dataset at favorite:", dataset);
        } catch (error) {
            console.log('Error retrieving data:', error);
        }
    };

    return (
        <AppScreen>
            <View style={styles.container}>
                <FlatList
                    data={dataset}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            subtitle={item.subtitle}
                            onPress={() => navigation.navigate("Product Detail", { item })}
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
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
});

export default FavoriteScreen;
