import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AccountScreen from '../ui/AccountScreen';
import HomeScreen from '../ui/HomeScreen';


const Drawer = createDrawerNavigator();
const AccountNavigator = () => (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name= "Home" component={HomeScreen}/>
        <Drawer.Screen name="Account" component={AccountScreen} />
    </Drawer.Navigator>
)

export default AccountNavigator;