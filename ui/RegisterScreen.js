import React from 'react';
import { Image, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import styles from '../config/styles';
function RegisterScreen(props) {
    return (
        <AppScreen>
            <Image style={styles.logo} source={require("../assets/images/logo.png")} />
            <AppTextInput icon={'phone'} placeholder={'Phone Numbers'}/>
            <AppTextInput icon={'email'} placeholder={'Email'}/>
            <AppTextInput icon={'account-lock'} secureTextEntry placeholder={'Password'}/>
            <AppTextInput icon={'account-lock'} secureTextEntry placeholder={'Confirm-Password'}/>
            <AppButton title={'register'}/>
        </AppScreen>
    );
}

export default RegisterScreen;