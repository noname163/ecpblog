import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './ui/LoginScreen';
import WelcomeScreen from './ui/WelcomeScreen';
import RegisterScreen from './ui/RegisterScreen';
import AppCard from './components/AppCard';
import CardDetailScreen from './ui/CardDetailScreen';
import HomeScreen from './ui/HomeScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native"

const Stack = createNativeStackNavigator();
const StackNavigator= () => (
  <Stack.Navigator>
        <Stack.Screen name="Wellcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Card Detail" component={CardDetailScreen} />
    </Stack.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
