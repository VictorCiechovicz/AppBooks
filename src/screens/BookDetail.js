import React, { useState } from 'react'
import {
  VStack,
  HStack,
  Text,
  Image,
  Box,
  ScrollView,
  Button
} from 'native-base'

import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { TouchableOpacity } from 'react-native'

import imageBook from '../../assets/it.png'

export default function BookDetail() {
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
    <VStack flex={1} mx="16px">
      <HStack
        justifyContent="space-between"
        alignItems="center"
        mb="36px"
        mt="45px"
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>

        <HStack>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Ionicons name="heart-outline" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity>
            <AntDesign name="sharealt" size={24} color="black" />
          </TouchableOpacity>
        </HStack>
      </HStack>

      <ScrollView showsVerticalScrollIndicator={false}>
        <HStack mb="32px">
          <Image
            source={imageBook}
            w="164px"
            h="253px"
            borderRadius="4px"
            alt="Livro"
          />

          <VStack mx="16px">
            <Text mb="8px" fontSize="16px" fontWeight="700">
              titulo do Livro
            </Text>

            <Text fontSize="14px" fontWeight="400" mb="16px">
              autor
            </Text>

            <HStack alignItems="center" mb="17px">
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

              <Text fontSize="14px" ml="8px" fontWeight="400">
                36 Avaliações
              </Text>
            </HStack>

            <HStack mb="4px">
              <Box
                p="5px"
                borderRadius="4px"
                borderWidth="1px"
                borderColor="#BDBDBD"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="14px" fontWeight="400">
                  tipo de livro
                </Text>
              </Box>
            </HStack>

            <HStack>
              <Box
                p="5px"
                borderRadius="4px"
                borderWidth="1px"
                borderColor="#BDBDBD"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="14px" fontWeight="400">
                  tipo de leitura
                </Text>
              </Box>
            </HStack>
          </VStack>
        </HStack>

        <VStack>
          <Text mb="16px" fontSize="18px" fontWeight="900">
            Sobre esse livro
          </Text>

          <Text fontSize="14px" fontWeight="400" textAlign="justify">
            Agora pense no quão especial alguém deve ser para conseguir os
            mesmos resultados quando nada ao redor conspira a seu favor. Em
            “Wonder Women”, o leitor conhecerá mulheres além de seu tempo.
            Pessoas brilhantes, que se recusaram a se acomodar no papel de
            coadjuvantes e foram à luta, tornando-se protagonistas de sua
            própria vida. Cientistas, engenheiras, matemáticas, aventureiras e
            inventoras cujos feitos mudaram os rumos da história.
          </Text>
        </VStack>

        <Button backgroundColor="#673403" mt="32px" mb="16px">
          Ler agora
        </Button>
      </ScrollView>
    </VStack>
  )
}
