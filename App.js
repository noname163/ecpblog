import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './ui/LoginScreen';
import WelcomeScreen from './ui/WelcomeScreen';
import RegisterScreen from './ui/RegisterScreen';
import AppCard from './components/AppCard';
import CardDetailScreen from './ui/CardDetailScreen';
import HomeScreen from './ui/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginScreen/> */}
      {/* <RegisterScreen/> */}
      {/* <WelcomeScreen/> */}
      {/* <AppCard 
      title={"Test"}
      subtitle={"Test"}
      image={require("./assets/images/background2.jpg")}/> */}
      {/* <CardDetailScreen/> */}
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
