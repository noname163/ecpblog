import React from 'react';
import { Image, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import styles from '../config/styles';

function LoginScreen(props) {
    return (
        <AppScreen>
            <Image style={styles.logo} source={require("../assets/images/logo.png")} />
            <AppTextInput icon={'email'} placeholder ={"Email"}/>
            <AppTextInput icon={'account-lock'} secureTextEntry placeholder ={"Password"}/>
            <AppButton title={"login"}/>
        </AppScreen>
    );
}


export default LoginScreen;