import React from 'react';
import AppScreen from '../components/AppScreen';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/button/AppButton';
import styleConfig from '../config/styles';
import routes from '../navigation/routes';


function WelcomeScreen({navigation}) {
    return (
        <AppScreen style={styles.container}>
                <ImageBackground
                    style={styles.background}
                    resizeMode='cover'
                    source={require("../assets/images/background2.jpg")}>
                    <Image style={styleConfig.logo} source={require("../assets/images/logo.png")} />
                    {/* <Image style={styles.wellcomeImage} source={require("../assets/images/wellcome.png")} /> */}
                    <Text style={styles.text}>Welcome To</Text>
                    <Text style={styles.text}>Exchange Blog</Text>
                    <View style={styles.buttons}>
                        <AppButton title={"login"} onPress={()=> navigation.navigate(routes.LOGIN_SCREEN)}/>
                        <AppButton title={"register"} onPress={()=> navigation.navigate(routes.REGISTER_SCREEN)} color='secondary' />
                    </View>
                </ImageBackground>
            </AppScreen>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1
    },
    text: {
        color: 'gray',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttons: {
        marginTop: 50,
        padding: 20,
        width: '90%'
    },
    wellcomeImage: {
        width: '50%',
        height: '30%'
    }
})
export default WelcomeScreen;