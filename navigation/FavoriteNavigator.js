import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../ui/HomeScreen';
import CardDetailScreen from '../ui/CardDetailScreen';
import AccountNavigator from './AccountNavigator';
import FavoriteScreen from '../ui/FavoriteScreen';

const Stack = createNativeStackNavigator();

const FavoriteNavigator = () => (
    <Stack.Navigator screenOptions={{
        presentation: "containedModal"
    }} >
        <Stack.Screen name='Favorite' component={FavoriteScreen} options={{
            headerShown: false
        }} />
        <Stack.Screen name= "Favorite Detail" component={CardDetailScreen} />
    </Stack.Navigator>
)

export default FavoriteNavigator;