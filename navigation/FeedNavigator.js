import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../ui/HomeScreen';
import CardDetailScreen from '../ui/CardDetailScreen';
import AccountNavigator from './AccountNavigator';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator screenOptions={{
        presentation:"modal"
    }} >
        <Stack.Screen name='Account' component={AccountNavigator} options={{
            headerShown:false
        }}/>
        <Stack.Screen name='Product Detail' component={CardDetailScreen} />
    </Stack.Navigator>
)

export default FeedNavigator;