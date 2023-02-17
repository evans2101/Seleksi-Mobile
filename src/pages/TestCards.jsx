import React, { useState } from 'react'
import { Text, View, Image, FlatList, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import Back from '../components/Back'
import BarHelper from '../components/BarHelper'
import Button from '../components/Button'
import TopBar from '../components/TopBar'
import { job } from '../data/fakeData'

const TestCards = ({navigation}) => {
    const [data, setData] = useState(job)

  return (
    <ScrollView>
        <Container>
            <TopBar />
            <BarHelper />
            <Back navigation={navigation} isSearch={true}/>

            <BoxesCon>
                {/* <FlatList 
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id }
                /> */}
                {data?.map((test, idx) => (
                    <Card key={idx}>
                        <Line></Line>
                        <Title>{test.title}</Title>    
                        <Button 
                            text={'Kerjakan Test'}
                            color={'#B4B4BB'}
                            width={'50%'}
                            height={'30px'}
                            textColor={'#fff'}
                            // onClick={()=> alert('TESS')} 
                            onPress={() => navigation.navigate('Exam')}
                        />
                    </Card>
                ))}
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    background-color: #FCEFEF;
    padding: 0 5px 15px 5px;
    margin-bottom: 15px;
`

const Title = styled.Text`
    font-size: 23px;
    font-weight: 500;
    text-align: center;
    margin: 12px 0;
`

const Line = styled.View`
  width: 100%;
  height: 7px;
  /* background-color:#9DC2FF; */
  /* background-color: #A9D3AB; */

  background-color: #FFDC99;
  /* background-color: #FCEFEF; */
  /* background-color: #B4B4BB; */

  border-radius: 5px;
  margin: 5px 0;
`


export default TestCards
