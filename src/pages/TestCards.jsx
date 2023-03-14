import React, { useEffect, useState, useRef, useContext } from 'react'
import { Text, View, Image, FlatList, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import Back from '../components/Back'
import BarHelper from '../components/BarHelper'
import Button from '../components/Button'
import TopBar from '../components/TopBar'
import Modal from '../components/Modal'
import { API } from '../config/api'
import { job } from '../data/fakeData'
import { Input } from 'native-base'
import { UserContext } from '../context/UserContext'

const TestCards = ({navigation}) => {
    const [open, setIsOpen] = useState(false)
    const [errorMessage, setErrorMessage] = useState()
    const [data, setData] = useState()
    const [code, setCode] = useState()
    const [inpCode, setInpCode] = useState()
    const [testId, setTestId] = useState()
    const {user, setUser, subbag, setSubbag} = useContext(UserContext)

    const scrollRef = useRef();

    const onPressTouch = () => {
        scrollRef.current?.scrollTo({
            y: 0,
            animated: false,
        });
    }

    const getDatas = async() => {
        try {
            const res = await API.get(`api/classes?populate=*`)
            setData(res.data.data)
            console.log(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const enterCode = () => {
        if(code && inpCode && testId){
            if(code === inpCode){
                navigation.navigate('Exam', {id: testId})
                setIsOpen(false)
            } else {
                setErrorMessage('Kode Test yang anda masukkan salah!')
            }
        }
    }

    useEffect(() => {
        getDatas()
    },[])

  return (
    // <View style={{backgroundColor:'white'}}>
        <ScrollView ref={scrollRef}>
            <Container>
                <TopBar user={user} subbag={subbag} />
                <BarHelper />
                <Back navigation={navigation} isSearch={true}/>

                <BoxesCon>
                    {/* <FlatList 
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id }
                    /> */}
                    {data?.map((test, idx) => (
                        test.attributes.isActive === true && (
                            <Card key={idx}>
                                <Line></Line>
                                <Title>{test.attributes.name}</Title>    
                                <Button 
                                    text={'Kerjakan Test'}
                                    color={'#B4B4BB'}
                                    width={'50%'}
                                    height={'30px'}
                                    textColor={'#fff'}
                                    onPress={() => {
                                        onPressTouch()
                                        setTestId(test.id)
                                        setCode(test.attributes.passcode)
                                        setIsOpen(true)
                                    }}
                                />
                            </Card>
                        )
                    ))}
                </BoxesCon>


            </Container>
            <Modal open={open} setIsOpen={setIsOpen}>
                <ModalClose onPress={() => setIsOpen(false)}>X</ModalClose>
                <ModalText>
                    <Text style={{fontSize:'12px', fontWeight:500, textAlign:'center'}} >Silahkan Masukkan Kode Test anda sesuai Instruksi</Text>
                </ModalText>
                <ModalInput>
                    <View style={{width:'100px'}}>
                        <Input 
                            onChangeText={(val) => {
                                setInpCode(val)
                            }}
                            variant="underlined" 
                            color='black' 
                        />
                    </View>
                </ModalInput>
                {errorMessage && (
                    <View style={{marginTop:'5px'}}>
                        <Text style={{color:'red', fontSize:'12px'}}>{errorMessage}</Text>
                    </View>
                )}
                <ModalButton>
                    <Button
                        text='Buka Soal'
                        color='#B4B4BB'
                        textColor='#fff'
                        fontSize='12px'
                        width='100px'
                        height='26px'
                        onPress={enterCode}
                    />
                </ModalButton>
            </Modal>
        </ScrollView>
    // </View>
  )
}

const Container = styled.View`
    display: flex;
    justify-content: center;
    /* align-items: center; */
    padding: 10px 0;
    /* margin: 40px 0; */
    /* background-color: green; */
`

const BoxesCon = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* background-color: red; */
`

const Card = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    background-color: #FCEFEF;
    padding: 0 5px 15px 5px;
    margin-bottom: 15px;
`

const Title = styled.Text`
    font-size: 23px;
    font-weight: 500;
    text-align: center;
    margin-top: 12px;
    margin-bottom: 12px;
`

const Line = styled.View`
  width: 100%;
  height: 7px;
  /* background-color:#9DC2FF; */
  /* background-color: #A9D3AB; */

  background-color: #FFDC99;
  /* background-color: #FCEFEF; */
  /* background-color: #B4B4BB; */

  border-radius: 5px;
  margin: 5px 0;
`
const ModalText = styled.View`
    margin-top: 10px;
`

const ModalClose = styled.Text`
    position: absolute;
    right: 8px;
    top: 2px;
    font-weight: 600;
`

const ModalInput = styled.View`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalButton = styled.View`
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`




export default TestCards
