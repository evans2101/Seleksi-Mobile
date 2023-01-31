import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import TopBar from '../components/TopBar'


const Information = () => {
  return (
    <Container>
      <TopBar />
    </Container>
  )
}

const Container = styled.View`
    display: flex;
    justify-content: center;
    margin: 40px 0;
    /* background-color: green; */
`

export default Information
