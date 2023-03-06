import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import styled from 'styled-components/native'

import Routes from './src/navigation/Routes';
import { useState } from 'react';
// import SideNav from './src/navigation/SideNav';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Container back={'white'}>
          {/* <StatusBar style="auto" /> */}
          <Routes />
          
        </Container>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${({ back }) => back};
  /* margin-top: 12px; */
  /* align-items: center; */
  /* justify-content: center; */
`

