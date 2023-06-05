import React from 'react';
import Constants from 'expo-constants'
import { SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
function AppScreen({ children }) {
    return (
        <SafeAreaView style={styles.screen}>
            <ImageBackground
                style={styles.background}
                resizeMode='cover'
                source={require("../assets/images/background2.jpg")}>
                {/* <Image source={require("../assets/images/logo.png")}/> */}
                {children}
            </ImageBackground>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'black'
    },
    background: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
})

export default AppScreen;