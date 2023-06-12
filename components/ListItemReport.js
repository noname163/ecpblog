import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import { MaterialIcons } from '@expo/vector-icons';

function ListItemReport({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container} >
            <MaterialIcons name="report" size={25} color={colors.while} />
        </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default ListItemReport;