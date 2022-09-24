import React, { useState } from 'react'
import { VStack, Text, HStack, Image } from 'native-base'
import { TouchableOpacity, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'

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
      <VStack mr="16px" mb="5px">
        <Image
        source={{uri:props.image}}
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

      <HStack>
        <Pressable onPress={startSelected}>
          <Entypo
            name="star"
            size={12}
            color={selectedStar === true ? '#673403' : '#BDBDBD'}
          />
        </Pressable>
        <Pressable onPress={startSelected}>
          <Entypo
            name="star"
            size={12}
            color={selectedStar === true ? '#673403' : '#BDBDBD'}
          />
        </Pressable>
        <Pressable onPress={startSelected}>
          <Entypo
            name="star"
            size={12}
            color={selectedStar === true ? '#673403' : '#BDBDBD'}
          />
        </Pressable>
        <Pressable onPress={startSelected}>
          <Entypo
            name="star"
            size={12}
            color={selectedStar === true ? '#673403' : '#BDBDBD'}
          />
        </Pressable>
        <Pressable onPress={startSelected}>
          <Entypo
            name="star"
            size={12}
            color={selectedStar === true ? '#673403' : '#BDBDBD'}
          />
        </Pressable>
      </HStack>
    </VStack>
  )
}
