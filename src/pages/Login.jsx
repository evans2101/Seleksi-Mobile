import { Input, Icon, Pressable, Checkbox } from 'native-base'
import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";
import styled from 'styled-components/native'
import Button from '../components/Button';
import Modal from '../components/Modal'
import { API } from '../config/api';

const Login = ({navigation}) => {
    const [show, setShow] = useState(false)
    const [open, setIsOpen] = useState(false)
    const [categoryOpen, setCategoryOpen] = useState(false)
    const [subCategoryOpen, setSubCategoryOpen] = useState(false)
    const [form, setForm] = useState({
      identifier: '',
      password: ''
    })

  const { identifier, password } = form;


  const handleLogin = async() => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const body = JSON.stringify(form);
      const response = await API.post("api/auth/local", body, config);
      navigation.navigate('tab')

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

    const toSubbag = () => {
      setIsOpen(true)
    }

    const toCategory = () => {
      setCategoryOpen(true)
      setIsOpen(false)
    }

    const toSubCategory = () => {
      setSubCategoryOpen(true)
      setCategoryOpen(false)
    }

  return (
    <Container>
      <Image 
        source={require('../../assets/banner.png')}
        style={{ height: '50%', width: '90%', marginTop:'30px', marginBottom:'30px'}}
        resizeMode='cover'
      />
      <Title>Login</Title>
      <View style={{textAlign: 'center', paddingButtom: '30px'}}>
        <Text>Selamat Datang di E-Seleksi Polda Riau</Text> 
      </View>
      <InputCon>
        <Input 
            value={identifier}
            onChangeText={(val) => {
              setForm((prevState) => ({...prevState, identifier: val}))
            }}
            borderRadius={10}
            borderColor='#ccc9c9'
            backgroundColor='#f9f9f9'
            w={'90%'} 
            placeholder='Email Address'
            InputRightElement={
                <Icon as={<MaterialIcons name="email" />} size={5} mr="2" color="muted.400" />
            }
        />
        <Input 
            value={password}
            onChangeText={(val) => {
              setForm((prevState) => ({...prevState, password: val}))
            }}
            borderRadius={10}
            borderColor='#ccc9c9'
            backgroundColor='#f9f9f9'
            w={'90%'} marginTop='15px'
            placeholder='Password'
            type={show? 'text' : 'password'}
            InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
                <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
            </Pressable>
          }
        />
      </InputCon>

      <View style={{paddingLeft:20, paddingTop:10}}>
        <Checkbox.Group
            // onChange={setGroupValues} value={groupValues}
        >
            <Checkbox value="one" my={2}>Remember Password</Checkbox>
        </Checkbox.Group>
      </View>

    <View style={{display:'flex', alignItems:'center'}}>
      <ButtonCon>
          <Button 
            text='Login' 
            color='#0386D0' 
            outline={true} 
            width='50%' height='40px'
            marginRight='10px'
            onPress={handleLogin}
          />
          <Button 
            text='Register' 
            color='#0386D0' 
            width='50%' height='40px'
            textColor='#fff'
            onPress={toSubbag}
          />
      </ButtonCon>
    </View>

    {/* <RegisterPopup open={open} setIsOpen={setIsOpen}/> */}

       <Modal open={open} setIsOpen={setIsOpen} isBackgroundClick={true}>
        <View>
          <TitleModal>Sihlakan Pilih Subbag</TitleModal>
          <ChooseCon activeOpacity='3.0' onPress={toCategory}>
            <Text>Subbag Diapers</Text>
            <TitleModal>></TitleModal>
          </ChooseCon>
          <ChooseCon>
            <Text>Subbag Seleksi</Text>
            <TitleModal>></TitleModal>
          </ChooseCon>
          <ChooseCon>
            <Text>Subbag PNS</Text>
            <TitleModal>></TitleModal>
          </ChooseCon>
        </View>
       </Modal>

       <Modal open={categoryOpen} setIsOpen={setCategoryOpen}>
        <TitleModal>Sihlakan Pilih Kategori</TitleModal>
        <ChooseCon activeOpacity='3.0' onPress={toSubCategory}>
          <Text>Akpol</Text>
          <TitleModal>></TitleModal>
        </ChooseCon>
        <ChooseCon activeOpacity='3.0'>
          <Text>SIPSS</Text>
          <TitleModal>></TitleModal>
        </ChooseCon>
        <ChooseCon activeOpacity='3.0'>
          <Text>Bintara</Text>
          <TitleModal>></TitleModal>
        </ChooseCon>
        <ChooseCon activeOpacity='3.0'>
          <Text>Tamtama</Text>
          <TitleModal>></TitleModal>
        </ChooseCon>
       </Modal>

       <Modal open={subCategoryOpen} setIsOpen={setSubCategoryOpen}>
        <TitleModal>Sihlakan Pilih Sub Kategori</TitleModal>
        <ChooseCon activeOpacity='3.0' onPress={() => navigation.navigate('register')}>
          <Text>Bakomsus</Text>
          <TitleModal>></TitleModal>
        </ChooseCon>
        <ChooseCon activeOpacity='3.0'>
          <Text>Bintara PTU</Text>
          <TitleModal>></TitleModal>
        </ChooseCon>
        <ChooseCon activeOpacity='3.0'>
          <Text>Bintara Brimop</Text>
          <TitleModal>></TitleModal>
        </ChooseCon>
        <ChooseCon activeOpacity='3.0'>
          <Text>Bintara Rekpro</Text>
          <TitleModal>></TitleModal>
        </ChooseCon>
       </Modal>

    </Container>
  )
}

const Container = styled.View`
    display: flex;
    justify-content: center;
    margin: 130px 0;
    /* background-color: green; */
`

const Title = styled.Text`
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    margin: 10px 0 15px 0;
`
const InputCon = styled.View`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* background-color: red; */
`

const ButtonCon = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px 0 ;
    /* background-color: red; */
    width: 90%;
`
const TitleModal = styled.Text`
  font-size: 20px;
  font-weight: 500;
`

const ChooseCon = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 5px 8px 0;
`

export default Login
