import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './ui/LoginScreen';
import WelcomeScreen from './ui/WelcomeScreen';
import RegisterScreen from './ui/RegisterScreen';
import CardDetailScreen from './ui/CardDetailScreen';
import HomeScreen from './ui/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from './config/colors';
import AuthNavigator from './navigation/AuthNavigator';
import navigationTheme from './navigation/navigationTheme';
import AppNavigator from './navigation/AppNavigator';
import AccountNavigator from './navigation/AccountNavigator';


export default function App() {
  return (
    <View style = {styles.container}> 
      <NavigationContainer theme={navigationTheme}>
      {/* <AuthNavigator/> */}
      <AppNavigator/>
      {/* <AccountNavigator/> */}
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
