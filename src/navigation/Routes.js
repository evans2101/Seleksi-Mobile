import React, { useEffect } from 'react'
import { View } from 'react-native'
import { useRoute } from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Information from '../pages/Information';
import Artikel from '../pages/Artikel';
import TestCards from '../pages/TestCards';
import Test from '../pages/Test';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator()


const Routes = () => {
  
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="Ujian" component={TestCards} /> */}
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="tab" component={BottomTabs} />
      {/* <Stack.Screen 
        name="Dashboard" 
        component={Dashboard}
        // initialParams={{'key':'Dashboard', 'name':routes}} 
       /> */}
      {/* <Stack.Screen name="Information" component={Information} ini /> */}
      <Stack.Screen name="artikel" component={Artikel} />
      <Stack.Screen name="Exam" component={Test} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}

export default Routes
