import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import colors from '../../config/colors';
import { Swipeable } from 'react-native-gesture-handler';
import AppText from '../text/AppText';

function ListItem({ image, title, subtitle, onPress, renderRightActions }) {
    return (
        <TouchableHighlight onPress={onPress} underlayColor={colors.while}>
            <Swipeable renderRightActions={renderRightActions}>
                <View style={styles.container}>
                    <Image style={styles.image} source={{uri:image}} />
                    <View style={styles.textContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.subtitle}>{subtitle}</AppText>
                    </View>
                </View>
            </Swipeable>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width:"100%"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title: {
        fontWeight: "500"
    },
    subtitle: {
        color: colors.medium
    },
    textContainer: {
        paddingTop: 15
    }
})
export default ListItem;