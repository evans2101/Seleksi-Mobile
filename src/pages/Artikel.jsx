import React, { useContext, useState } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import Back from '../components/Back'
import BarHelper from '../components/BarHelper'
import TopBar from '../components/TopBar'
import { UserContext } from '../context/UserContext'

const Artikel = ({navigation, route}) => {
 const {data} = route.params
 const {user, setUser, subbag, setSubbag} = useContext(UserContext)
 console.log(data)
  return (
    <ScrollView>
        <Container>
            <TopBar user={user} subbag={subbag} />
            <BarHelper />
            <Back navigation={navigation} />

            <Card>
                <Line></Line>
                <Title>{data.attributes.title}</Title>

                <Image 
                    source={`${data.attributes.cover.data.attributes.url}`}
                    style={{ height: '180px', width: '100%', margin:'10px 0'}}
                    resizeMode='cover'
                />

                <Text style={{color:'#928f8f'}}>{data.attributes.content}</Text>
            </Card>
        </Container>
    </ScrollView>
  )
}

const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    /* margin: 40px 0; */
    /* background-color: green; */
`

const Card = styled.View`
    display: flex;
    justify-content: center;
    width: 90%;
    /* background-color: red; */
`

const Title = styled.Text`
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 10px;
`

const Line = styled.View`
  width: 100%;
  height: 7px;
  background-color:#9DC2FF;
  /* background-color: #A9D3AB; */

  /* background-color: #FFDC99; */
  /* background-color: #FCEFEF; */
  /* background-color: #B4B4BB; */

  border-radius: 5px;
  margin: 5px 0;
`


export default Artikel
