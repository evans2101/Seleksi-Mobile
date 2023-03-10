import { Input, Icon, Pressable, Checkbox } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";
import styled from 'styled-components/native'
import Button from '../components/Button';
import Modal from '../components/Modal'
import Register from './Register';
import { API } from '../config/api';
import userData from '../context/UserContext';

const Login = ({navigation}) => {
    const [userData, setUserData] = useState()
    const [errorMessage, setErrorMessage] = useState()
    const [regis, setRegis] = useState(false)
    const [show, setShow] = useState(false)
    const [open, setIsOpen] = useState(false)
    const [categoryOpen, setCategoryOpen] = useState(false)
    const [subCategoryOpen, setSubCategoryOpen] = useState(false)

    const [subbagList, setSubbagList] = useState()
    const [subbagName, setSubbagName] = useState()
    const [idSubbag, setIdSubbag] = useState()

    const [categoryList, setCategoryList] = useState()
    const [categoryName, setCategoryName] = useState()
    const [idCategory, setIdCategory] = useState()

    const [subCategoryList, setSubCategoryList] = useState()
    const [subCategoryName, setSubCategoryName] = useState()

    const [form, setForm] = useState({
      identifier: '',
      password: ''
    })

  const { identifier, password } = form;

  const handleLogin = async() => {
    try {
      console.log('tesesss')
      const config = { headers: { "Content-Type": "application/json" } };
      const data = JSON.stringify(form);
      const body = data
      const response = await API.post("api/auth/local", body, config);

      console.log('res', response)
      if(response?.status === 200){
        setUserData(response?.data?.user)
        navigation.navigate('tab')
      }

    } catch ({response}) {
      setErrorMessage(response?.data?.error?.message)
      // console.log(error)
    }
  }

  const getSubbag = async() => {
    try {
      const res = await API.get(`api/categories`)
      setSubbagList(res?.data?.data)
      if(idSubbag !== undefined) setCategoryList(res?.data?.data[idSubbag]?.attributes?.categories)
      if(idCategory !== undefined){
        setSubCategoryList(res?.data?.data[idSubbag]?.attributes?.categories[idCategory]?.sub_categories)
      }
    } catch (error) {
      console.log(error)
    }
  }

    const toCategory = (id, name) => {
      setIdSubbag(id)
      setSubbagName(name)
      setCategoryOpen(true)
      setIsOpen(false)
    }

    const toSubCategory = (id, name, dataSub) => {
      if(dataSub.length > 0){
        setIdCategory(id)
        setCategoryName(name)
        setSubCategoryOpen(true)
        setCategoryOpen(false)
      } else {
        setCategoryName(name)
        setRegis(true)
        // navigation.navigate('register', {
        //   category: categoryName,
        //   subCategory: subCategoryName
        // })
      }
    }

    const toRegister = (name) => {
      setSubCategoryName(name)
      setRegis(true)
      // navigation.navigate('register', {
      //   category: categoryName,
      //   subCategory: subCategoryName
      // })
    }

    useEffect(() => {
      getSubbag()
    }, [idSubbag, idCategory])

    useEffect(() => {
      console.log(form)
      console.log(userData)
    }, [form, userData])

    useEffect(() => {
      if(subbagName){
        if(subbagName === 'SUBBAG DIAPERS') setSubbagName('diapers-users')
        if(subbagName === 'SUBBAG SELEKSI') setSubbagName('seleksi-users')
        if(subbagName === 'SUBBAG PNS') setSubbagName('pns-users')
      }

    },[ subbagName, categoryName, subCategoryName])
  
  if(regis) return <Register subbag={subbagName} category={categoryName} subCategory={subCategoryName} />

  return (
    <Container>
      {/* {userData && 
        <userData.Provider value={{user: userData}}></userData.Provider>
      } */}
      <ImageContainer>
        <Image 
          source={require('../../assets/logo1.png')}
          style={{ height: '90%', width: '70%', marginTop:'30px', marginBottom:'30px'}}
          resizeMode='cover'
        />
      </ImageContainer>
      <Title>Login</Title>
      <View style={{textAlign: 'center'}}>
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
        {/* <Checkbox.Group
            // onChange={setGroupValues} value={groupValues}
        >
            <Checkbox value="one" my={2}>Remember Password</Checkbox>
        </Checkbox.Group> */}
        {errorMessage && (
          <View>
            <Text style={{color:'red'}}>{errorMessage}</Text>
          </View>
        )}
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
            onPress={() => setIsOpen(true)}
          />
      </ButtonCon>
    </View>

    {/* <RegisterPopup open={open} setIsOpen={setIsOpen}/> */}

       <Modal open={open} setIsOpen={setIsOpen} isBackgroundClick={true}>
        <View>
          <TitleModal>Sihlakan Pilih Subbag</TitleModal>
          {subbagList?.map((data, idx) => (
            <ChooseCon 
              activeOpacity='3.0' 
              onPress={() => toCategory(idx, data?.attributes?.name) } 
              key={idx}
            >
              <Text>{data?.attributes?.name}</Text>
              <TitleModal>></TitleModal>
            </ChooseCon>
          ))}
        </View>
       </Modal>

       <Modal open={categoryOpen} setIsOpen={setCategoryOpen} isBackgroundClick={true}>
        <TitleModal>Sihlakan Pilih Kategori</TitleModal>
        {categoryList?.map((data, idx) => (
          <ChooseCon 
            activeOpacity='3.0' 
            onPress={() => toSubCategory(idx, data.name, data.sub_categories)} 
            key={idx}
          >
            <Text>{data.name}</Text>
            {data.sub_categories?.length > 0 && (
              <TitleModal>></TitleModal>
            )}
          </ChooseCon>
        ))}
       </Modal>

       <Modal open={subCategoryOpen} setIsOpen={setSubCategoryOpen} isBackgroundClick={true}>
        <TitleModal>Sihlakan Pilih Sub Kategori</TitleModal>
        {subCategoryList?.map((data) => (
          <ChooseCon activeOpacity='3.0' onPress={() => toRegister(data.name)} key={data.id}>
            <Text>{data.name}</Text>
          </ChooseCon>
        ))}
       </Modal>

    </Container>
  )
}

const Container = styled.View`
    display: flex;
    justify-content: center;
    margin: 120px 0;
    /* background-color: green; */
`

const ImageContainer = styled.View`
  display: flex;
  align-items: center;
  height: 90%;
`

const Title = styled.Text`
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    margin: 10px 0 15px 0;
    /* background-color: red; */
    /* padding-top: -60px; */
`
const InputCon = styled.View`
    margin-top: 40px;
    /* padding-top: -200px; */
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
