import React, { useContext, useEffect, useState } from 'react'
import { Text, View, Image, FlatList, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import Back from '../components/Back'
import BarHelper from '../components/BarHelper'
import TopBar from '../components/TopBar'
import { API } from '../config/api'
import { UserContext } from '../context/UserContext'
import { information } from '../data/fakeData'

const Information = ({navigation}) => {
  const [data, setData] = useState()
  const {user, setUser, subbag, setSubbag} = useContext(UserContext)

   const getArticles = async() => {
    try {
      const res = await API.get(`api/articles?populate=*`)
      setData(res.data.data)
      console.log(res.data.data)
    } catch (error) {
      console.log(error)
    }
   }

   const limitContent = (content) => {
    let limit = content.substring(0, 24)
    let word = limit + '...'

    return (
      content.length < 25 ? content : word
    )
   }

  useEffect(() => {
    getArticles()
  },[])

  const renderItem = ({item}) => {

    return(
      <BoxesCon>
        <Card onPress={() => navigation.navigate('artikel', {data : item})}>
          <Line></Line>
          <CardContent>
            <DescCon>
              <Title>{item.attributes.title}</Title>
              <Text>{limitContent(item.attributes.content)}</Text>
            </DescCon>

            <View>
              <Image 
                  source={`${item.attributes.cover.data.attributes.url}`}
                  style={{ height: '55px', width: '100px'}}
                  resizeMode='cover'
              />
            </View>
          </CardContent>
        </Card>
      </BoxesCon>
    )
  }

  return (
    <ScrollView>
      <Container>
        <TopBar user={user} subbag={subbag}/>
        <BarHelper />
        <Back navigation={navigation} isSearch={true}/>

        <FlatList 
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id }
        />

      </Container>
    </ScrollView>
  )
}

const Container = styled.View`
    display: flex;
    justify-content: center;
    padding: 10px 0;
    /* margin: 40px 0; */
    /* background-color: green; */
`

const BoxesCon = styled.View`
  /* background-color: red; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Card = styled.TouchableOpacity`
  /* background-color: yellow; */
  width: 90%;
  padding: 8px 5px;
  margin: 8px 0;
  border-radius: 8px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2)
  /* box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.48), 0px 0px 4px rgba(0, 0, 0, 0.12); */
`

const CardContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Line = styled.View`
  width: 100%;
  height: 5px;
  background-color:#9DC2FF;
  /* background-color: #A9D3AB; */

  /* background-color: #FFDC99; */
  /* background-color: #FCEFEF; */
  /* background-color: #B4B4BB; */

  border-radius: 5px;
  margin-bottom: 5px;
`

const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
`

const DescCon = styled.View`
  max-width: 200px;
`

export default Information
