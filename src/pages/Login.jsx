import { Input, Icon, Pressable, Checkbox } from 'native-base'
import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";
import styled from 'styled-components/native'
import Button from '../components/Button';

const Login = () => {
    const [show, setShow] = useState(false)
  return (
    <Container>
      <Image 
        source={require('../../assets/banner.png')}
        style={{ height: '50%', width: '90%', margin: '30px 0 30px 0'}}
        resizeMode='cover'
      />
      <Title>Login</Title>
      <View style={{textAlign: 'center', paddingButtom: '30px'}}>Selamat Datang di E-Seleksi Polda Riau</View>
      <InputCon>
        <Input 
            borderRadius={10}
            borderColor='#ccc9c9'
            backgroundColor='#f9f9f9'
            w={'90%'} 
            placeholder='Email Address'
            InputRightElement={
                <Icon as={<MaterialIcons name="email" />} size={5} mr="2" color="muted.400" />
            }
        />
        <Input 
            borderRadius={10}
            borderColor='#ccc9c9'
            backgroundColor='#f9f9f9'
            w={'90%'} marginTop='15px'
            placeholder='Password'
            type={show? 'text' : 'password'}
            InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
                <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
            </Pressable>
          }
        />
      </InputCon>

      <View style={{paddingLeft:20, paddingTop:10}}>
        <Checkbox.Group
            // onChange={setGroupValues} value={groupValues}
        >
            <Checkbox value="one" my={2}>Remember Password</Checkbox>
        </Checkbox.Group>
      </View>

    <View style={{display:'flex', alignItems:'center'}}>
      <ButtonCon>
          <Button 
            text='Login' 
            color='#0386D0' 
            outline={true} 
            width='50%' height='40px'
            marginRight='10px'
          />
          <Button 
            text='Register' 
            color='#0386D0' 
            width='50%' height='40px'
            textColor='#fff'
          />
      </ButtonCon>
    </View>

      {/* <Text style={{textAlign:'right', marginRight:20, marginTop:15}}>
        Don't have an account? 
        <Text style={{color:'purple'}}> Sign Up</Text>
      </Text> */}

    </Container>
  )
}

const Container = styled.View`
    display: flex;
    justify-content: center;
    margin: 130px 0;
    /* background-color: green; */
`

const Title = styled.Text`
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    margin: 10px 0 15px 0;
`
const InputCon = styled.View`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* background-color: red; */
`

const ButtonCon = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px 0 ;
    /* background-color: red; */
    width: 90%;
`

export default Login
