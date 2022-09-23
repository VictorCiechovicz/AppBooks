import React from 'react'
import { VStack, HStack, Text } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'

import CardBook from '../components/CardBook'

export default function FiccaoCategoria() {
  const navigation = useNavigation()

  return (
    <VStack flex={1} mx="16px">
      <HStack
        justifyContent="flex-start"
        alignItems="center"
        mb="36px"
        mt="12px"
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>

        <Text ml="21px" fontSize="24px" fontWeight="900">
          Ficção
        </Text>
      </HStack>
      <HStack mb="24px">
        <CardBook title="IT A Coisa" autor="Andy Muschietti" />
        <CardBook title="IT A Coisa" autor="Andy Muschietti" />
        <CardBook title="IT A Coisa" autor="Andy Muschietti" />
      </HStack>
      <HStack>
        <CardBook title="IT A Coisa" autor="Andy Muschietti" />
        <CardBook title="IT A Coisa" autor="Andy Muschietti" />
        <CardBook title="IT A Coisa" autor="Andy Muschietti" />
      </HStack>
    </VStack>
  )
}
