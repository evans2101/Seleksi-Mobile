import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styled from "styled-components/native";

const Modal = ({open, setIsOpen, isBackgroundClick, children}) => {
  if(!open) return null
  return (
    <Overlay 
      activeOpacity='3.0'
      onPress={isBackgroundClick? () => setIsOpen(!open) : null}
    >
      <ModalContainer 
        onPress={(e) => e.stopPropagation()} 
        activeOpacity='3.0' 
      >
        {children}
      </ModalContainer>
    </Overlay>
  )
}

const Overlay = styled.TouchableOpacity`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 99;
`

const ModalContainer = styled.TouchableOpacity`
  max-width: 310px;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  top: 40%;
  left: 10%;
  padding: 10px;
  z-index: 100;
  /* transform: translate(-50%, -50%); */
`

export default Modal
