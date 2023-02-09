import React from 'react'
import { View } from 'react-native'

import Routes from './Routes'
import BottomTabs from './BottomTabs'

const Navigation = ({route, routes}) => {
    console.log(route)
  return (
      <Routes routes={routes} />
  )
}

export default Navigation
