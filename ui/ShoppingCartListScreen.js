import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import AppScreen from '../components/AppScreen';
import ListItem from '../components/list/ListItem';
import ListItemReport from '../components/list/ListItemReport';


const initDataset = [
    {
        id: 1,
        image: require("../assets/splash.png"),
        title: "Iphone 8",
        subtitle: "Iphone 7 new OR 100$"
    },
    {
        id: 2,
        image: require("../assets/splash.png"),
        title: "Iphone 9",
        subtitle: "Iphone 8 new OR 100$"
    },
    {
        id: 3,
        image: require("../assets/splash.png"),
        title: "Iphone 13",
        subtitle: "Iphone 12 new OR 100$"
    }
]
function ShoppingCardListScreen({ navigation }) {
    const [dataset, setDataset] = useState(initDataset);
    const [refreshing, setRefreshing] = useState(false);
    const handleDelete = data => {
        setDataset(dataset.filter(d => d.id !== data.id))
    }
    return (
        <AppScreen>
            <View style={styles.container}>
                <FlatList
                    data={dataset}
                    keyExtractor={(item => item.id.toString())}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            subtitle={item.subtitle}
                            onPress={() => navigation.navigate("Product Detail", { item })}
                            image={item.image}
                            renderRightActions={() =>
                                <ListItemReport
                                    icon="restore-from-trash"
                                    onPress={() => handleDelete(item)} />} />}
                    refreshing={refreshing}
                    onRefresh={() => setDataset(initDataset)}
                />

            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%"
    }
})
export default ShoppingCardListScreen;