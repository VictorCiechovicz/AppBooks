import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Favoritos() {
  return (
    <View style={estilos.container}>
      <Text>Favoritos</Text>
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
