import { Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const Button = ({text, color, outline, textColor, ...rest}) => {
  return (
    <Buttons outline={outline} color={color} {...rest }>
      <Text style={{color:textColor? textColor : ''}}>{text}</Text>
    </Buttons>
  )
}

const Buttons = styled.TouchableOpacity`
    border-width: 1px;
    border-color: ${({ color }) => color? color : ''};
    background-color: ${({ outline, color }) => !outline? color? color : '' : '#fff'};
    border-radius: 10px;
    height: ${({ height }) => height? height : 'auto'};
    width: ${({ width }) => width? width : 'auto'};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: ${({marginLeft}) => marginLeft ? marginLeft : ''};
    margin-right: ${({marginRight}) => marginRight ? marginRight : ''};
`

export default Button