import { Text, View } from 'react-native'
import styled from 'styled-components/native'

const Button = ({text, color, outline, ...rest}) => {
  return (
    <Buttons outline={outline} color={color} {...rest }>
      <Text>{text}</Text>
    </Buttons>
  )
}

const Buttons = styled.View`
    border-width: 1px;
    border-color: ${({ color }) => color? color : ''};
    background-color: ${({ outline, color }) => !outline? color? color : '' : '#fff'};
    /* border-radius: 50%; */
    height: ${({ height }) => height? height : 'auto'};
    width: ${({ width }) => width? width : 'auto'};
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Button