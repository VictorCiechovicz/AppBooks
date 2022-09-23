import React, { useState } from 'react'
import { VStack, Text, HStack, Image } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'

import film1 from '../../assets/it.png'

export default function CardBook(props) {
  const navigation = useNavigation()
  const [selectedStar, setSelectedStar] = useState(false)

  function startSelected() {
    if (!selectedStar) {
      setSelectedStar(true)
    } else {
      setSelectedStar(false)
    }
  }
  return (
    <VStack>
      <TouchableOpacity onPress={() => navigation.navigate(props.pressione)}>
        <VStack mr="16px" mb="5px">
          <Image
            source={film1}
            w="104px"
            h="160px"
            borderRadius="4px"
            alt="Livro"
          />
          <Text fontSize="14px" fontWeight="700">
            {props.title}
          </Text>
          <Text fontSize="12px" fontWeight="400">
            {props.autor}
          </Text>
        </VStack>
      </TouchableOpacity>

      <HStack>
        <TouchableOpacity onPress={startSelected}>
          <Entypo
            name="star"
            size={12}
            color={selectedStar === true ? '#673403' : '#BDBDBD'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={startSelected}>
          <Entypo
            name="star"
            size={12}
            color={selectedStar === true ? '#673403' : '#BDBDBD'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={startSelected}>
          <Entypo
            name="star"
            size={12}
            color={selectedStar === true ? '#673403' : '#BDBDBD'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={startSelected}>
          <Entypo
            name="star"
            size={12}
            color={selectedStar === true ? '#673403' : '#BDBDBD'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={startSelected}>
          <Entypo
            name="star"
            size={12}
            color={selectedStar === true ? '#673403' : '#BDBDBD'}
          />
        </TouchableOpacity>
      </HStack>
    </VStack>
  )
}
