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

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "dodgerblue"
      },
      headerTintColor: colors.while
    }}>
    <Stack.Screen name="Wellcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Card Detail" component={CardDetailScreen} />
  </Stack.Navigator>
)

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "red"
    }}
  >
    <Tab.Screen name="Home" component={StackNavigator} options={{
      tabBarIcon: () => <MaterialCommunityIcons name='home'/>
    }} />
    <Tab.Screen name="Login" component={LoginScreen} />
  </Tab.Navigator>
)

export default function App() {
  return (
    <View style = {styles.container}> 
      <NavigationContainer theme={navigationTheme}>
      {/* <AuthNavigator/> */}
      <AppNavigator/>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
