import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../ui/HomeScreen';
import CardDetailScreen from '../ui/CardDetailScreen';
import ShoppingCard from './../components/ShoppingCard';
import ShoppingCardListScreen from '../ui/ShoppingCartListScreen';

const Stack = createNativeStackNavigator();

const ShoppongCartNavigator = () => (
    <Stack.Navigator screenOptions={{
        presentation:"modal"
    }} >
        <Stack.Screen name='Shopping Cart' component={ShoppingCardListScreen} options={{
            headerShown: false
        }}/>
        <Stack.Screen name='Product Detail' component={CardDetailScreen} />
    </Stack.Navigator>
)

export default ShoppongCartNavigator;