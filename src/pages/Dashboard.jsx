import React, { useState } from 'react'
import { Text, View, TouchableOpacity, FlatList, ScrollView, StyleSheet } from 'react-native'
import { AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components/native'
import BarHelper from '../components/BarHelper'
import Button from '../components/Button'
import TopBar from '../components/TopBar'

const Dashboard = ({navigation, route}) => {

    console.log('tes', route)

  return (
    <ScrollView>
        <Container>
            <TopBar />
            <BarHelper />

            <View style={{width:'90%', marginBottom:'40px'}}>
                <Title>Dashboard</Title>
                <Text style={{fontWeight:'400', color:'#9696A0'}}>Welcome, John Smith</Text>
            </View>

            <MenuBoxes>
                <Card>
                    <AntDesign name="team" size={20} color="black" />
                    <OptionText>Presensi</OptionText>
                </Card>
                <Card onPress={() => navigation.navigate('Information')}>
                    <Ionicons name="ios-information-circle-sharp" size={20} color="black" />
                    <OptionText>Informasi</OptionText>
                </Card>
                <Card onPress={() => navigation.navigate('Ujian')}>
                    <FontAwesome name="question-circle" size={20} color="black" />
                    <OptionText>Test Online</OptionText>
                </Card>
                <Card>
                    <FontAwesome name="history" size={20} color="black" />
                    <OptionText>History</OptionText>
                </Card>
            </MenuBoxes>

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

    /* background: linear-gradient(82.48deg, rgba(83, 218, 169, 0.83) 51.66%, rgba(83, 218, 169, 0) 112.76%); */
    /* background: linear-gradient(227.37deg, rgba(42, 77, 204, 0.7) 18.33%, rgba(42, 77, 204, 0) 100.71%); */
    /* background: linear-gradient(112.31deg, rgba(214, 218, 17, 0.9) 51.92%, rgba(47, 47, 46, 0.702) 51.93%, rgba(214, 218, 17, 0.66197) 66.74%, rgba(214, 218, 17, 0.644294) 73.47%, rgba(214, 218, 17, 0) 87.92%); */
    /* background: linear-gradient(119.03deg, rgba(207, 142, 16, 0.72) 12.87%, rgba(207, 142, 16, 0.167624) 80.77%, rgba(207, 142, 16, 0) 105.44%); */
`

export const MenuBoxes = styled.View`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
    gap: 17;
    /* background-color: beige; */
`

export const Card = styled.TouchableOpacity`
    display: flex;
    /* align-items: center; */
    justify-content: center;
    padding: 10px;
    width: 45%;
    height: 85px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    /* background-color: aliceblue; */

    /* background: linear-gradient(112.31deg, rgba(214, 218, 17, 0.9) 51.92%, rgba(47, 47, 46, 0.702) 51.93%, rgba(214, 218, 17, 0.66197) 66.74%, rgba(214, 218, 17, 0.644294) 73.47%, rgba(214, 218, 17, 0) 87.92%); */
`

const Title = styled.Text`
    font-size: 22px;
    font-weight: 700;
`

const OptionText = styled.Text`
    font-size: 15px;
    font-weight: 500;
`

// const styles = StyleSheet.create


export default Dashboard
