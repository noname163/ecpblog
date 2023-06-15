import React from 'react';
import AppScreen from '../components/AppScreen';
import { Image, StyleSheet, View } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

function CardDetailScreen({route}) {
    const data = route.params.item;
    return (
        <AppScreen>
            <Image style={styles.image} source={data.image} />
            <View style={styles.detailsContainer} >
                <AppText style={styles.title}>{data.title}</AppText>
                <AppText style={styles.price}>{data.subtitle}</AppText>
                <View style={styles.userContainer}>
                <ListItem title={"Somthing bad happen"}
                    subtitle={"Notthing bad happen"}
                    image={require("../assets/images/background.jpg")} />
                </View>
            </View>
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    userContainer:{
        marginVertical:40
    }

})

export default CardDetailScreen;