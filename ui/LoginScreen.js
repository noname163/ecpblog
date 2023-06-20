import React from 'react';
import { Image } from 'react-native';
import AppScreen from '../components/AppScreen';
import AppButton from '../components/button/AppButton';
import AppTextInput from '../components/text/AppTextInput';
import styles from '../config/styles';
import routes from '../navigation/routes';

function LoginScreen({navigation}) {
    return (
        <AppScreen>
            <Image style={styles.logo} source={require("../assets/images/logo.png")} />
            <AppTextInput icon={'email'} placeholder ={"Email"}/>
            <AppTextInput icon={'account-lock'} secureTextEntry placeholder ={"Password"}/>
            <AppButton title={"login"} onPress={()=>navigation.navigate(routes.HOME_SCREEN)}/>
        </AppScreen>
    );
}


export default LoginScreen;