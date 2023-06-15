import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../ui/LoginScreen';
import RegisterScreen from '../ui/RegisterScreen';
import WelcomeScreen from '../ui/WelcomeScreen';



const Stack = createNativeStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Wellcome" component={WelcomeScreen} options={{
        headerShown: false
        }}/>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
)

export default AuthNavigator;