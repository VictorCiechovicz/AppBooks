import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons'
import axios from 'axios'

import film1 from '../../assets/it.jfif'
import film2 from '../../assets/cach.jfif'
import film3 from '../../assets/frank.jfif'

import {
  VStack,
  HStack,
  Text,
  Image,
  Input,
  FlatList,
  SectionList,
  Box
} from 'native-base'
import { TouchableOpacity } from 'react-native'

import ImagePerfil from '../../assets/perfil.png'

export default function Home() {
  const [maisLidos, setMaisLidos] = useState([])

  useEffect(() => {
    const fechtBooks = async () => {
      const res = await axios.get(
        `  https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=DdUDH1G8SAU50EnsxKSq3Fr30n4J0Kn7`
      )
      setMaisLidos(res.data.results.books)
    }
    fechtBooks()
  }, [])

  return (
    <VStack flex={1} justifyContent="flex-start" alignItems="center">
      <HStack
        flex={1}
        alignItems="flex-start"
        justifyContent="center"
        mt="50px"
      >
        <Text
          fontSize="24px"
          fontWeight="bold"
          marginRight="194px"
          marginLeft="23px"
        >
          Bookshelf
        </Text>
        <Image source={ImagePerfil} w="30px" h="30px" alt="Perfil" />
      </HStack>
      <HStack flex={1} alignItems="flex-start" justifyContent="center">
        <Input
          placeholder="Qual livro você gostaria de ler?"
          w="343px"
          h="56px"
          fontSize="14px"
          borderRadius="4px"
          InputRightElement={
            <Feather name="search" size={20} color="#828282" />
          }
        />
      </HStack>
      <HStack
        flex={1}
        justifyContent="center"
        alignItems="flex-start"
        ml="16px"
      >
        <Text fontSize="18px" fontWeight="bold">
          Para você
        </Text>
        <FlatList />
      </HStack>

      <HStack
        flex={1}
        justifyContent="center"
        alignItems="flex-start"
        ml="16px"
      >
        <Text fontSize="18px" fontWeight="bold">
          Categorias
        </Text>

        <FlatList />
      </HStack>
      <HStack
        flex={1}
        justifyContent="center"
        alignItems="flex-start"
        ml="16px"
      >
        <Text fontSize="18px" fontWeight="bold">
          Os mais lidos da semana
        </Text>
        <Box>
          <Image sorce={film1} w="104px" h="160px" borderRadius="4px" />
          <Text></Text>
          <Text></Text>
          <HStack></HStack>
        </Box>
      </HStack>
    </VStack>
  )
}
