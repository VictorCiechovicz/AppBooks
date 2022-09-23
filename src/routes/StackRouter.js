import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BookDetail from '../screens/BookDetail'
import BiografiaCategoria from '../screens/BiografiaCategoria'
import TecnologiaCategoria from '../screens/TecnologiaCategoria'
import FiccaoCategoria from '../screens/FiccaoCategoria'
import PoliticaCategoria from '../screens/PoliticaCategoria'
import AutoajudaCategoria from '../screens/AutoajudaCategoria'

import Home from '../screens/Home'

const Stack = createNativeStackNavigator()

export default function StackRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="HomeDetails" component={Home} />
      <Stack.Screen name="BookDetail" component={BookDetail} />
      <Stack.Screen name="BiografiaCategoria" component={BiografiaCategoria} />
      <Stack.Screen
        name="TecnologiaCategoria"
        component={TecnologiaCategoria}
      />
      <Stack.Screen name="FiccaoCategoria" component={FiccaoCategoria} />
      <Stack.Screen name="PoliticaCategoria" component={PoliticaCategoria} />
      <Stack.Screen name="AutoajudaCategoria" component={AutoajudaCategoria} />
    </Stack.Navigator>
  )
}
