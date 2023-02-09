import React, { useState } from 'react'
import { Text, View, Image, FlatList, ScrollView, TextInput } from 'react-native'
import styled from 'styled-components/native'
import BarHelper from '../components/BarHelper'
import Button from '../components/Button'
import TopBar from '../components/TopBar'

const Test = () => {

  return (
    <ScrollView>
        <Container>
            <TopBar />
            <BarHelper />

            <BoxesCon>
              <Card>
                <Line></Line>
                <Title>Title Soal</Title>
                <Text style={{color:'#928f8f'}}>Description Soal</Text>
              </Card>
            </BoxesCon>

            <BoxesCon style={{marginTop:12}}>
              <Card>
                <View>
                  <Text>1. Siapakah Presiden RI</Text>
                  <TextInput
                    editable
                    multiline
                    autoFocus
                    numberOfLines={3}
                    // maxLength={400}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    style={{padding: 10, marginTop:15}}
                  />
                </View>

                <View>
                  <Text>2. Siapakah Presiden RI</Text>
                  <TextInput
                    editable
                    multiline
                    // autoFocus
                    numberOfLines={3}
                    // maxLength={400}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    style={{padding: 10, marginTop:15}}
                  />
                </View>

                <View>
                  <Text>3. Siapakah Presiden RI</Text>
                  <TextInput
                    editable
                    multiline
                    // autoFocus
                    numberOfLines={3}
                    // maxLength={400}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    style={{padding: 10, marginTop:15}}
                  />
                </View>

                <ButtonCon>
                  <Button 
                    text='Akhiri Test'
                    color='#D1D1F9'
                    width='35%'
                    height='30px'
                  />
                </ButtonCon>

              </Card>
            </BoxesCon>

        </Container>
    </ScrollView>
  )
}

const Container = styled.View`
    display: flex;
    justify-content: center;
    /* align-items: center; */
    padding: 10px 0;
    /* margin: 40px 0; */
    /* background-color: green; */
`

const BoxesCon = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* background-color: red; */
`

const Card = styled.View`
    width: 90%;
    padding: 8px 5px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3)
    /* background-color: blue; */
`

const Title = styled.Text`
    font-size: 20px;
    font-weight: 700;
    /* text-align: center; */
    margin: 10px 0;
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
`

const ButtonCon = styled.View`
  display: flex;
  justify-content: end;
  align-items: flex-end;
  width: 100%;
  margin-top: 12px;
  /* background-color: red; */
`


export default Test
