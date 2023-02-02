import React from 'react'
import { Text, View, Image } from 'react-native'
import styled from 'styled-components/native'

const TopBar = () => {
  return (
    <Container>
        <Header>
            <Image 
                source={require('../../assets/inforImg.jpg')}
                style={{ height: '60px', width: '50px'}}
                resizeMode='cover'
            />
        </Header>
    </Container>
  )
}

const Container = styled.View`
    display: flex;
    justify-content: center;
    margin: 40px 0;
    /* background-color: green; */
`

const Header = styled.View`
    display: flex;
    /* background-color: green; */
`

export default TopBar
