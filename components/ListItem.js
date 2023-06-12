import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppCard from './AppCard';
import AppText from './AppText';
import colors from '../config/colors';

function ListItem({image, title, subtitle}) {
    return (
       <View style={styles.container}>
        <Image style={styles.image} source={image}/>
        <View style={styles.textContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
       </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginRight:10
    },
    title:{
        fontWeight:"500"
    },
    subtitle:{
        color:colors.medium
    },
    textContainer:{
        paddingTop:15
    }
})
export default ListItem;