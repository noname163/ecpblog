import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import FavoriteScreen from '../ui/FavoriteScreen';
import CreateProductScreen from './../ui/CreateProductScreen';
import FeedNavigator from './FeedNavigator';
import NewListingButton from './NewListingButton';
import routes from './routes';
import FavoriteNavigator from './FavoriteNavigator';

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
      name="Favorities"
      component={FavoriteNavigator}
      options={{
        headerShown:false,
        tabBarIcon: () => (
          <MaterialCommunityIcons name="heart" size={33} color="black" />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
