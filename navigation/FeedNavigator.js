import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../ui/HomeScreen';
import CardDetailScreen from '../ui/CardDetailScreen';
import AccountNavigator from './AccountNavigator';
import FavoriteNavigator from './FavoriteNavigator';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator screenOptions={{
        presentation: "containedModal"
    }} >
        <Stack.Screen name='Account' component={AccountNavigator} options={{
            headerShown: false
        }} />
        <Stack.Screen name='Product Detail'
            options={{ 
                headerShown: true,
             }}
        
            component={CardDetailScreen} />
    </Stack.Navigator>
)

export default FeedNavigator;