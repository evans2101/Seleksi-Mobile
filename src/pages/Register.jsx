import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { Input } from "native-base";
import styled from "styled-components/native";
import Button from "../components/Button";
import Modal from '../components/Modal'
import { API } from "../config/api";
import { regis } from "../data/fakeData";

const Register = ({navigation, subbag, category, subCategory}) => {
  const [date, setDate] = useState('09-10-2021');
  const [form, setForm] = useState({
    email: '',
    password: '',
    category: category,
    sub_Category: subCategory,
    nip_nrp: '',
    name: '',
    birth_place: '',
    birth_date: '',
    gender: '',
    phone: '',
    satker: ''
  })

  const handleRegister = async() => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const body = JSON.stringify(form);
      
      const response = await API.post(`api/${subbag}/register`, body, config);
      if(response?.status === 200) navigation.navigate('login')

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ScrollView>
      <Container>
        <Title onPress={() => navigation.navigate('tab')} >{subCategory? subCategory : category}</Title>

        <InputsCon>
          {regis.map((inp, idx) => (
            <InpCon key={idx}>
              <Text style={{ textAlign: "left", width: "90%" }}>{inp?.name}</Text>
              {inp?.input !== 'birth_date' ? 
                <Input
                  value={form[inp.input]}
                  onChangeText={(val) => {
                    setForm((prevState) => ({...prevState, [inp.input]: val}))
                  }}
                  borderRadius={10}
                  borderColor="#ccc9c9"
                  backgroundColor="#f9f9f9"
                  w={"90%"}
                  marginTop="8px"
                  marginBottom="10px"
                  type={inp?.type}
                /> : 
                <View>
                  <Text></Text>
                </View>
              }
            </InpCon> 
          ))}

        </InputsCon>

        <ButtonCon>
          <Button
            text="Registrasi"
            color="#0386D0"
            outline={true}
            width="50%"
            height="35px"
            onPress={handleRegister}
          />
        </ButtonCon>

        <View style={{ paddingRight: 20, paddingTop: 10}}>
          <Text style={{textAlign: 'right', fontSize: '15px'}}>
            Already have Account?{' '}
            <Text
              onPress={() => navigation.navigate('login')}
            >
              Login
            </Text>
          </Text> 
        </View>
  
      </Container>
    </ScrollView>
  );
};

const Container = styled.View`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  /* background-color: green; */
`;

const Title = styled.Text`
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  margin: 10px 0 15px 0;
`;

const InputsCon = styled.View`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* background-color: red; */
`;

const InpCon = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ButtonCon = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 0 8px 0;
  transition-duration: 0.4s;
`;


export default Register;
