import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import colors from '../../config/colors';
import { AntDesign } from '@expo/vector-icons';
import AppText from '../text/AppText';

function AppCard({ title, subtitle, image, onPress, renderRightActions }) {
    return (
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={image} />
                <Swipeable renderRightActions={renderRightActions}>
                    <View style={styles.detailsContainer}>
                        <View style={styles.textContainer}>
                            <AppText style={styles.title}>{title}</AppText>
                            <AppText style={styles.subtitle}>{subtitle}</AppText>
                        </View>
                        <AntDesign
                            style={styles.heartIcon}
                            name="hearto"
                            size={24}
                            color="black"
                        />
                    </View>
                </Swipeable>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.while,
        marginBottom: 20,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    detailsContainer: {
        padding: 20,
        flexDirection: "row"
    },
    textContainer: {
        marginBottom: 10,
    },
    title: {
        marginBottom: 5,
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: 'bold',
    },
    heartIcon: {
        marginLeft:"auto",
        marginVertical:15
    },
});

export default AppCard;
