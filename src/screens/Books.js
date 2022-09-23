import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Books() {
  return (
    <View style={estilos.container} >
      <Text>Books</Text>
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
