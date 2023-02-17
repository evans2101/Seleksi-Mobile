import React from 'react'
import { View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Login from '../pages/Login';

const SideNav = () => {
    const Drawer = createDrawerNavigator();
  return (
    <View>
        <Drawer.Navigator initialRouteName="Dashboard">
            <Drawer.Screen name="Dashboard" component={Dashboard} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Logout" component={Login} />
        </Drawer.Navigator>
    </View>
  )
}

export default SideNav
