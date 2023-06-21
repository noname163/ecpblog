import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import CreateProductScreen from './../ui/CreateProductScreen';
import FeedNavigator from './FeedNavigator';
import NewListingButton from './NewListingButton';
import ShoppingCartNavigator from './ShoppingCartNavigator';
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
