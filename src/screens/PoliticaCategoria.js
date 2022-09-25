import React from 'react'
import { VStack, HStack, Text } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'

import CardBook from '../components/CardBook'

export default function PoliticaCategoria() {
  const navigation = useNavigation()

  return (
    <VStack flex={1} mx="16px">
      <HStack
        justifyContent="flex-start"
        alignItems="center"
        mb="36px"
        mt="30px"
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>

        <Text ml="21px" fontSize="24px" fontWeight="900">
          Política
        </Text>
      </HStack>
      <HStack mb="24px">
   
      </HStack>
      <HStack>
     
      </HStack>
    </VStack>
  )
}
