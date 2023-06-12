import React, { useState } from 'react';
import AppScreen from '../components/AppScreen';
import { FlatList, View, StyleSheet } from 'react-native';
import AppCard from '../components/AppCard';
import ListItemReport from '../components/ListItemReport';


const initDataset = [
    {
        id: 1,
        image: require("../assets/images/background.jpg"),
        title: "Somthing to exchange 1",
        subtitle: "Change for everythings"
    },
    {
        id: 2,
        image: require("../assets/images/background.jpg"),
        title: "Somthing to exchange 2",
        subtitle: "Change for everythings"
    },
    {
        id: 3,
        image: require("../assets/images/background.jpg"),
        title: "Somthing to exchange 3",
        subtitle: "Change for everythings"
    }
]
function HomeScreen(props) {
    const[dataset,setDataset] = useState(initDataset);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = data =>{
        setDataset(dataset.filter(d => d.id !== data.id));
    }
    return (
        <AppScreen>
            <View style ={styles.container}>
            <FlatList
                data={dataset}
                keyExtractor={(item => { item.id.toString() })}
                renderItem={({item}) =>
                    <AppCard
                        title={item.title}
                        subtitle={item.subtitle}
                        onPress={()=> console.log(item)}
                        image={item.image} 
                        renderRightActions={()=>
                        <ListItemReport 
                        onPress={()=> handleDelete(item)}/>}/>}
                        refreshing={refreshing}
                        onRefresh={()=>console.log("refresh")}     
            />

            </View>
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        padding:15
    }
})

export default HomeScreen;