import React from 'react'
import { Text, View } from 'react-native'
import { Input, Icon } from 'native-base'
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Search = () => {
  return (
    <View>
      <Input 
        borderRadius={10}
        borderColor='#ccc9c9'
        backgroundColor='#f9f9f9'
        // w={'50%'} 
        placeholder='Search'
        InputLeftElement={
            <Icon as={<MaterialIcons name="search" />} size={5} ml="2" color="muted.400" />
        }
       />
    </View>
  )
}

export default Search
