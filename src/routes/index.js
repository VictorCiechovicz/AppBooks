import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import TabRouter from './TabRouter'

export default function Route() {
  return (
    <NavigationContainer>
      <TabRouter />
    </NavigationContainer>
  )
}
