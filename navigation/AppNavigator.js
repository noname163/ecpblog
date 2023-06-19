import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../ui/HomeScreen';
import CreateProductScreen from './../ui/CreateProductScreen';
import ShoppingCartListScreen from '../ui/ShoppingCartListScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FeedNavigator from './FeedNavigator';
import AccountScreen from './../ui/AccountScreen';
import ShoppingCartNavigator from './ShoppingCartNavigator';
import NewListingButton from './NewListingButton';
import routes from './routes';

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={FeedNavigator}
      options={{
        headerShown: false,
        tabBarIcon: () => <MaterialCommunityIcons name="home" size={33} />,
      }}
    />
    <Tab.Screen
      name="Create Product"
      component={CreateProductScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton onPress={() => navigation.navigate(routes.CREAT_PRODUCT_SCREEN)} />
        ),
      })}
    />
    <Tab.Screen
      name="Shopping Cart"
      component={ShoppingCartNavigator}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name="cart" size={24} color="black" />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
