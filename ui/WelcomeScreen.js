import React from 'react';
import AppScreen from '../components/AppScreen';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <AppScreen style={styles.container}>
            <ImageBackground
                style={styles.background}
                resizeMode='cover'
                source={require("../assets/images/background2.jpg")}>
                    {/* <Image source={require("../assets/images/logo.png")}/> */}
                <Text style={styles.text}>Welcome To Exchange Blog</Text>
                <View style={styles.buttons}>
                    <AppButton title={"login"} />
                    <AppButton title={"register"} color='secondary'/>
                </View>
            </ImageBackground>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width:'100%',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'blue'
    },
    container: {
        flex: 1
    },
    text: {
        color: 'black',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttons:{
        marginTop:50,
        padding:20,
        width:'90%'
    }
})
export default WelcomeScreen;