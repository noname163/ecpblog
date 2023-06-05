import React from 'react';
import AppScreen from '../components/AppScreen';
import { StyleSheet, Text, View } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

function LoginScreen(props) {
    return (
        <AppScreen>
            <AppTextInput icon={'email'} placeholder ={"Email"}/>
            <AppTextInput icon={'account-lock'} placeholder ={"Password"}/>
            <AppButton title={"login"}/>
        </AppScreen>
    );
}

export default LoginScreen;