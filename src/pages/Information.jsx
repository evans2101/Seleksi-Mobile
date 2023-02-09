import React, { useState } from 'react'
import { Text, View, Image, FlatList, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import BarHelper from '../components/BarHelper'
import TopBar from '../components/TopBar'
import { information } from '../data/fakeData'

const Information = ({navigation}) => {
  const [data, setData] = useState(information)

  const renderItem = ({item}) => {
    // console.log(item)
    // console.log('item', item.data[0].id)

    return(
      <BoxesCon>
        <Card onPress={() => navigation.navigate('artikel')}>
          <Line></Line>
          <CardContent>
            <DescCon>
              <Title>Title 1</Title>
              <Text>Content Descriptionnnnnnnnnnnnnnn</Text>
            </DescCon>

            <View>
              <Image 
                  source={require('../../assets/inforImg.jpg')}
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
        <TopBar />
        <BarHelper />

        <FlatList 
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.data[0].id }
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
