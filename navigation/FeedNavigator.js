import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../ui/HomeScreen';
import CardDetailScreen from '../ui/CardDetailScreen';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator screenOptions={{
        presentation:"modal"
    }} >
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Product Detail' component={CardDetailScreen} />
    </Stack.Navigator>
)

export default FeedNavigator;