import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from "native-base";
import styled from 'styled-components/native'
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Information from './src/pages/Information';

export default function App() {
  return (
    <NativeBaseProvider>
      <Container back={'white'}>
        {/* <StatusBar style="auto" /> */}
        <Login />
        {/* <Register /> */}
        {/* <Information /> */}
      </Container>
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

