import React from 'react'
import { Text, View, Image } from 'react-native'
import styled from 'styled-components/native'

const TopBar = () => {
  return (
    <Container>
        <Header>
            <Image 
                source={require('../../assets/inforImg.jpg')}
                style={{ height: '45px', width: '45px'}}
                resizeMode='cover'
            />
            <Profile>
                <Text>John Smith</Text>
                <Image 
                    source={require('../../assets/inforImg.jpg')}
                    style={{ height: '40px', width: '40px', borderRadius:'50%', marginLeft:'10px'}}
                    resizeMode='cover'
                />
            </Profile>
        </Header>
    </Container>
  )
}

const Container = styled.View`
    position: fixed;
    display: flex;
    justify-content: center;
    /* margin: 40px 0; */
    height: 55px;
    background-color: #EDE4E4;
    top: 0;
    right: 0;
    left: 0;
`

const Header = styled.View`
    display: flex;
    /* background-color: green; */
    align-items: center;
    margin: 0 15px;
    flex-direction: row;
    justify-content: space-between;
`

const Profile = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    /* background-color: green; */
`

export default TopBar
