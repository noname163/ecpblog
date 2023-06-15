import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../ui/HomeScreen';
import CreateProductScreen from './../ui/CreateProductScreen';
import ShoppingCardScreen from './../ui/ShoppingCardScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FeedNavigator from './FeedNavigator';
import AccountScreen from './../ui/AccountScreen';

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator  >
    <Tab.Screen name="Home" component={FeedNavigator} options={{
      headerShown:false,
      tabBarIcon: () => <MaterialCommunityIcons name='home' size={33}/>
    }} />
    <Tab.Screen name="Create Product" component={CreateProductScreen} />
    <Tab.Screen name="Shopping Card" component={ShoppingCardScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
)

export default AppNavigator;