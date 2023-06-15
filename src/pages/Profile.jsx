import React, { useState } from 'react'
import { Text, View, Image, ScrollView, TextInput } from 'react-native'
import { Input } from "native-base";
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native'
import Button from '../components/Button'
 
const Profile = () => {

  return (
    <ScrollView>
        <Container>

            <TopBoxes>
              <AntDesign name="arrowleft" size={24} color="black" />
              <Title>Personal Information</Title>
            </TopBoxes>

            <FormBox>
              <InpCon>
                <Text style={{ textAlign: "left", width: "90%", fontSize:'16px' }}>Username</Text>
                <Input
                  variant="underlined"
                  w={"90%"}
                  marginTop="8px"
                  marginBottom="10px"
                />
              </InpCon>

              <InpCon>
                <Text style={{ textAlign: "left", width: "90%", fontSize:'16px' }}>Email Address</Text>
                <Input
                  variant="underlined"
                  w={"90%"}
                  marginTop="8px"
                  marginBottom="10px"
                />
              </InpCon>

              <InpCon>
                <Text style={{ textAlign: "left", width: "90%", fontSize:'16px' }}>Phone Number</Text>
                <Input
                  variant="underlined"
                  w={"90%"}
                  marginTop="8px"
                  marginBottom="10px"
                />
              </InpCon>

              <ButtonCon>
                <Button 
                  text='Save changes'
                  width='90%'
                  height='35px'
                  color='#0386D0'
                  textColor='#fff'
                />
              </ButtonCon>
            </FormBox>

        </Container>
    </ScrollView>
  )
}

const Container = styled.View`
    display: flex;
    justify-content: center;
    /* align-items: center; */
    padding: 10px 0;
    margin: 20px 0;
    /* background-color: green; */
`

const TopBoxes = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 5px 10px;
`

const FormBox = styled.View`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const ButtonCon = styled.View`
  position: fixed;
  bottom: 8;
  display: flex;
  align-items: center;
  width: 100%;
  /* margin-top: 20; */
`

const InpCon = styled.View`
  display: flex;
  align-items: center;
  width: 95%;
  margin-top: 10px;
`

const Title = styled.Text`
  font-size: 22px;
  font-weight: 500;
`


export default Profile
