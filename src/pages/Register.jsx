import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Input } from 'native-base'
import styled from 'styled-components/native'
import Button from '../components/Button'

const Register = () => {
  return (
    <ScrollView>
        <Container>
            <Title>Register</Title>

            <InputsCon>
                <InpCon>
                    <Text style={{textAlign:'left', width:'90%'}}>Email Address</Text>
                    <Input 
                        borderRadius={10}
                        borderColor='#ccc9c9'
                        backgroundColor='#f9f9f9'
                        w={'90%'} marginTop='8px' marginBottom='10px'
                    />
                </InpCon>

                <InpCon>
                    <Text style={{textAlign:'left', width:'90%'}}>Password</Text>
                    <Input 
                        borderRadius={10}
                        borderColor='#ccc9c9'
                        backgroundColor='#f9f9f9'
                        w={'90%'} marginTop='8px' marginBottom='10px'
                        type='password'
                    />
                </InpCon>

                <InpCon>
                    <Text style={{textAlign:'left', width:'90%'}}>NIP/NRP</Text>
                    <Input 
                        borderRadius={10}
                        borderColor='#ccc9c9'
                        backgroundColor='#f9f9f9'
                        w={'90%'} marginTop='8px' marginBottom='10px'
                    />
                </InpCon>

                <InpCon>
                    <Text style={{textAlign:'left', width:'90%'}}>Nama Lengkap</Text>
                    <Input 
                        borderRadius={10}
                        borderColor='#ccc9c9'
                        backgroundColor='#f9f9f9'
                        w={'90%'} marginTop='8px' marginBottom='10px'
                    />
                </InpCon>

                <InpCon>
                    <Text style={{textAlign:'left', width:'90%'}}>Pangkat</Text>
                    <Input 
                        borderRadius={10}
                        borderColor='#ccc9c9'
                        backgroundColor='#f9f9f9'
                        w={'90%'} marginTop='8px' marginBottom='10px'
                    />
                </InpCon>

                <InpCon>
                    <Text style={{textAlign:'left', width:'90%'}}>Tempat Lahir</Text>
                    <Input 
                        borderRadius={10}
                        borderColor='#ccc9c9'
                        backgroundColor='#f9f9f9'
                        w={'90%'} marginTop='8px' marginBottom='10px'
                    />
                </InpCon>

                <InpCon>
                    <Text style={{textAlign:'left', width:'90%'}}>Tanggal Lahir</Text>
                    <Input 
                        borderRadius={10}
                        borderColor='#ccc9c9'
                        backgroundColor='#f9f9f9'
                        w={'90%'} marginTop='8px' marginBottom='10px'
                    />
                </InpCon>

                <InpCon>
                    <Text style={{textAlign:'left', width:'90%'}}>Jenis Kelamin</Text>
                    <Input 
                        borderRadius={10}
                        borderColor='#ccc9c9'
                        backgroundColor='#f9f9f9'
                        w={'90%'} marginTop='8px' marginBottom='10px'
                    />
                </InpCon>

                <InpCon>
                    <Text style={{textAlign:'left', width:'90%'}}>No.Hp</Text>
                    <Input 
                        borderRadius={10}
                        borderColor='#ccc9c9'
                        backgroundColor='#f9f9f9'
                        w={'90%'} marginTop='8px' marginBottom='10px'
                    />
                </InpCon>

                <InpCon>
                    <Text style={{textAlign:'left', width:'90%'}}>Satker</Text>
                    <Input 
                        borderRadius={10}
                        borderColor='#ccc9c9'
                        backgroundColor='#f9f9f9'
                        w={'90%'} marginTop='8px' marginBottom='10px'
                    />
                </InpCon>
            </InputsCon>

            <ButtonCon>
                <Button 
                    text='Login' 
                    color='#0386D0' 
                    outline={true} 
                    width='50%' height='35px'
                />
            </ButtonCon>

        </Container>
    </ScrollView>
  )
}

const Container = styled.View`
    display: flex;
    justify-content: center;
    margin: 40px 0;
    /* background-color: green; */
`

const Title = styled.Text`
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    margin: 10px 0 15px 0;
`

const InputsCon = styled.View`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* background-color: red; */
`

const InpCon = styled.View`
    display: flex;
    align-items: center;
    width: 100%;
`

const ButtonCon = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px 0 8px 0;
`

export default Register
