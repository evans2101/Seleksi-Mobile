import React, { useContext, useEffect, useRef, useState } from 'react'
import { Text, View, Image, FlatList, ScrollView, TextInput } from 'react-native'
import { Radio } from 'native-base'
import styled from 'styled-components/native'
import Back from '../components/Back'
import BarHelper from '../components/BarHelper'
import Button from '../components/Button'
import TopBar from '../components/TopBar'
import { API } from '../config/api'
import Modal from '../components/Modal'
import { UserContext } from '../context/UserContext'

const Test = ({navigation, route}) => {
  const {id} = route.params
  const [open, setIsOpen] = useState(false)
  const [data, setData] = useState()
  const [question, setQuestion] = useState()
  const [value, setValue] = useState();
  const [result, setResult] = useState(null)
  const [form, setForm] = useState({
    value: '',
    user: '',
    class: ''
  })
  const scrollRef = useRef();
  const {user, setUser, subbag, setSubbag} = useContext(UserContext)

  const onPressTouch = () => {
      scrollRef.current?.scrollTo({
          y: 0,
          animated: false,
      });
  }

  const getDatas = async() => {
      try {
          const res = await API.get(`api/classes/${id}?populate[0]=questions&populate[1]=questions.options`)
          setQuestion(res.data.data.attributes.questions)
          setData(res.data.data.attributes)
      } catch (error) {
          // console.log(error)
      }
  }

  const handlePost = async() => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const body = JSON.stringify({
        "data": {
            "value": result,
            "user": 180,
            "class": id
        }
    });
      const response = await API.post("api/scores", body, config);

      console.log(response)

    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = () => {
    let validation = 0
    let results = 0
    value.map((d) => {
      if(d.val){
        if(d.val.includes(`true`)) validation = validation + 1
      }
    })
    console.log(validation)
    onPressTouch()
    if(validation){
      results = Math.round(validation / question.data.length * 100) 
    }

    setResult(results)

    console.log({results})
    console.log({result})
  }

  useEffect(() => {
      getDatas()
  },[])

  useEffect(() => {
    if(result !== null){
      setIsOpen(true)
      handlePost()
    }
  }, [result])

  useEffect(() => {
    let tes = []
    if(question){
      question.data.map((q) => {
        tes.push({
          val: null,
          isCorrect: false
        })
      })

      setValue(tes)
    }
},[question])

  if(!data) return null
  return (
    <ScrollView ref={scrollRef}> 
        <Container>
            <TopBar user={user} subbag={subbag} />
            <BarHelper />
            <Back navigation={navigation} />

            <BoxesCon>
              <Card>
                <Line></Line>
                <Title>{data?.name}</Title>
                <Text style={{color:'#928f8f'}}>{data?.description}</Text>
              </Card>
            </BoxesCon>

            <BoxesCon style={{marginTop:12}}>
              { question?.data?.map((data, idx) => (
                <Card key={data.id}>
                  <View>
                    <Text>{idx+1}. {data.attributes.title}</Text>
                      <Radio.Group
                        value={value[idx].val}
                        onChange={values => {
                          let clone = [...value]
                          let obj = clone[idx]
                          obj.val = values
                          clone[idx] = obj
                          setValue([...clone]);
                        }}
                      >
                        {data?.attributes?.options?.data.map((opt, idx) => (
                          <Radio value={`${idx + 1} ${opt.attributes.isValid}`} my={1} key={idx}> 
                            {opt.attributes.name}
                          </Radio>
                        ))}
                      </Radio.Group>
                  </View>
                </Card>
              ))}
                <ButtonCon>
                  <Button 
                    text='Akhiri Test'
                    color='#D1D1F9'
                    width='35%'
                    height='30px'
                    onPress={handleSubmit}
                  />
                </ButtonCon>
            </BoxesCon>
        </Container>
        {result !== null && (
          <Modal open={open} setIsOpen={setIsOpen}>
              {/* <ModalClose onPress={() => setIsOpen(false)}>X</ModalClose> */}
              <ModalText>
                  <Text style={{fontSize:'12px', fontWeight:500, textAlign:'center'}}>Score Anda</Text>
              </ModalText>
              <ModalInput>
                  {result}
              </ModalInput>
              <ModalButton>
                  <Button
                      text='Kembali ke Dashboard'
                      color='#B4B4BB'
                      textColor='#fff'
                      fontSize='12px'
                      width='180px'
                      height='26px'
                      onPress={() => {
                        navigation.navigate('Dashboard')
                        setIsOpen(false)
                      }}
                  />
              </ModalButton>
          </Modal>
        )}
    </ScrollView>
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
    width: 90%;
    padding: 8px 5px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3)
    /* background-color: blue; */
`

const Title = styled.Text`
    font-size: 20px;
    font-weight: 700;
    /* text-align: center; */
    margin: 10px 0;
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
`

const ButtonCon = styled.View`
  display: flex;
  justify-content: end;
  align-items: flex-end;
  width:90%;
  margin-top: 12px;
  /* background-color: red; */
`

const ModalText = styled.View`
    margin-top: 1px;
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


export default Test
