import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import ImagePerfil from '../../assets/perfil.png'
import {
  VStack,
  HStack,
  Text,
  Image,
  Input,
  FlatList,
  ScrollView,
  Box
} from 'native-base'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import CardCategoria from '../components/CardCategoria'
import CardBook from '../components/CardBook'

export default function Home() {
  const navigation = useNavigation()
  const [maisLidos, setMaisLidos] = useState([])
  // função abaixo busca na api
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
    <VStack flex={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HStack
          alignItems="flex-start"
          justifyContent="center"
          mt="50px"
          mb="28px"
        >
          <Text fontSize="24px" fontWeight="bold" marginRight="194px">
            Bookshelf
          </Text>
          <Image source={ImagePerfil} w="30px" h="30px" alt="Perfil" />
        </HStack>
        <HStack mb="28px" justifyContent="center">
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
        <Text fontSize="18px" fontWeight="bold" ml="16px" mb="16px">
          Para você
        </Text>

        <HStack mx="16px">
          <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
            <VStack mr="16px" mb="32px">
              <CardBook
                title="IT A Coisa"
                autor="Andy Muschietti"
                pressione={'BookDetail'}
              />
            </VStack>

            <VStack mr="16px">
              <CardBook title="IT A Coisa" autor="Andy Muschietti" />
            </VStack>

            <VStack mr="16px" mb="32px">
              <CardBook title="IT A Coisa" autor="Andy Muschietti" />
            </VStack>
            <VStack mr="16px" mb="32px">
              <CardBook title="IT A Coisa" autor="Andy Muschietti" />
            </VStack>
          </ScrollView>
        </HStack>

        <Text fontSize="18px" fontWeight="bold" ml="16px" mb="16px">
          Categorias
        </Text>
        <HStack
          justifyContent="center"
          alignItems="flex-start"
          ml="16px"
          mb="32px"
        >
          <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => navigation.navigate('BiografiaCategoria')}
            >
              <CardCategoria title="Biografia" color="#F2994A" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('TecnologiaCategoria')}
            >
              <CardCategoria title="Tecnologia" color="#219653" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('FiccaoCategoria')}
            >
              <CardCategoria title="Ficção" color="#9B51E0" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('PoliticaCategoria')}
            >
              <CardCategoria title="Política" color="#4F4F4F" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('AutoajudaCategoria')}
            >
              <CardCategoria title="Autoajuda" color="#56CCF2" />
            </TouchableOpacity>
          </ScrollView>
        </HStack>

        <Text ml="16px" mb="16px" fontSize="18px" fontWeight="bold">
          Os mais lidos da semana
        </Text>
        <HStack ml="16px">
          <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
            <VStack mr="16px" mb="32px">
              <CardBook title="IT A Coisa" autor="Andy Muschietti" />
            </VStack>
            <VStack mr="16px" mb="32px">
              <CardBook title="IT A Coisa" autor="Andy Muschietti" />
            </VStack>
            <VStack mr="16px" mb="32px">
              <CardBook title="IT A Coisa" autor="Andy Muschietti" />
            </VStack>
          </ScrollView>
        </HStack>
      </ScrollView>
    </VStack>
  )
}
