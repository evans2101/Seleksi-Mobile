import React, { useContext, useEffect } from 'react'
import { Text, View, Image } from 'react-native'
import styled from 'styled-components/native'

const TopBar = ({user, subbag}) => {

    // useEffect(() => {
    //     console.log(user[subbag]?.user_detail?.name)
    //     console.log({user})
    //     console.log({subbag})
    // }, [user, subbag])
    
  return (
    <Container>
        <Header>
            <Image 
                source={require('../../assets/logo1.png')}
                style={{ height: '45px', width: '45px'}}
                resizeMode='cover'
            />
            <Profile>
                <Text>{user[subbag]?.user_detail?.name}</Text>
                <Image 
                    source={require('../../assets/profile.png')}
                    style={{ height: '26px', width: '26px', borderRadius:'50%', marginLeft:'10px'}}
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
