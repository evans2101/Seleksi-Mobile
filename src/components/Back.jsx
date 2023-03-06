import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native'
import Search from './Search';

const Back = ({navigation, isSearch}) => {
  return (
    <Container>
        <BackCon>
            <Ionicons 
                name="arrow-back" 
                size={24} 
                color="#5292fa" 
                onPress={() => navigation.goBack()}
            />
            <BackText>Back</BackText>
        </BackCon>

        {isSearch && (
            <SearchCon>
                <Search />
            </SearchCon>
        )}
    </Container>
  )
}

const Container = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
`

const BackText = styled.Text`
    font-size: 17px;
    font-weight: 500;
`

const BackCon = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5;
`

const SearchCon = styled.View`
    width: 40%;
`

export default Back