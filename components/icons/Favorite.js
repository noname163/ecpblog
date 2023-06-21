import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

function Favorite({ isFavorite }) {

    return (
        <AntDesign
            style={styles.heartIcon}
            name="hearto"
            size={24}
            color={isFavorite ? "red" : "black"}
        />
    );
}

const styles = StyleSheet.create({

})

export default Favorite;