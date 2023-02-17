import React, { useState } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import Back from '../components/Back'
import BarHelper from '../components/BarHelper'
import TopBar from '../components/TopBar'

const Artikel = ({navigation}) => {

  return (
    <ScrollView>
        <Container>
            <TopBar />
            <BarHelper />
            <Back navigation={navigation} />

            <Card>
                <Line></Line>
                <Title>Title 1</Title>

                <Image 
                    source={require('../../assets/banner.png')}
                    style={{ height: '180px', width: '100%', margin:'10px 0'}}
                    resizeMode='cover'
                />

                <Text style={{color:'#928f8f'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt in eum natus aliquid omnis incidunt aliquam expedita. Debitis quasi, libero fuga adipisci totam necessitatibus officiis nemo et cumque saepe voluptatibus nesciunt inventore dolorem quis facere dolores quod? Inventore, maxime laborum ipsum, aspernatur, officiis eos cupiditate quisquam animi repudiandae similique iste consequatur rem sunt sit magnam nulla a qui. Nostrum deleniti eveniet eligendi nihil, commodi maiores unde quaerat quos! Explicabo alias saepe sint facilis dolores veritatis ut blanditiis voluptas, nemo natus vitae. Mollitia commodi hic itaque. Hic quod repellat ea incidunt dolores molestiae obcaecati ut velit, ullam vel fugiat saepe nihil et voluptatem iure possimus perferendis dolorem ipsum. Excepturi consectetur voluptatem quibusdam vero aut nemo, repudiandae labore culpa quis tempore optio autem adipisci, quas inventore provident laborum suscipit quaerat consequuntur omnis, debitis obcaecati neque voluptatibus dolores? Ducimus possimus deserunt exercitationem itaque fugit dolorum similique tempora beatae incidunt, neque laborum ratione quas.</Text>
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
