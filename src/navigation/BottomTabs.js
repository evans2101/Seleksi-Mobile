import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons"

import Routes from './Routes';
import Dashboard from '../pages/Dashboard';
import Information from '../pages/Information';
import TestCards from '../pages/TestCards';
import Artikel from '../pages/Artikel';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return(
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({route}) =>({
            headerMode: "screen",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#7AC1E4"},
            tabBarIcon: ({focused, color, size}) => {
                let iconName

                if (route.name === "Dashboard") {
                iconName = focused ? "ios-home" : "ios-home-outline"
                } else if (route.name == "Information") {
                iconName = focused ? "information-circle" : "information-circle-outline"
                } else if (route.name == "Ujian") {
                iconName = focused ? "list-circle" : "list-circle-outline"
                }
                return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: "#005885",
            tabBarInactiveTintColor: "gray"
            })}
        >
            <Tab.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
            <Tab.Screen name="Information" component={Information} options={{ headerShown: false }} />
            <Tab.Screen name="Ujian" component={TestCards} options={{ headerShown: false }} />
            {/* <Tab.Screen name="Artikel" component={Artikel} options={{ headerShown: false }} /> */}

        </Tab.Navigator>
    )
}

export default BottomTabs
