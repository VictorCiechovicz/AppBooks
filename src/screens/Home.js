import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import ImagePerfil from '../../assets/perfil.png'
import {
  VStack,
  HStack,
  Text,
  Image,
  Input,
  FlatList,
  ScrollView
} from 'native-base'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import CardCategoria from '../components/CardCategoria'
import CardBook from '../components/CardBook'

import BuscaLivrosMaisLidosSemana from '../services/BuscaLivrosMaisLidosSemana'
import { Loading } from '../components/Loading'

export default function Home() {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(true)
  const [maisLidos, setMaisLidos] = useState([])

  // função abaixo busca na api
  useEffect(async () => {
    const resultado = await BuscaLivrosMaisLidosSemana()

    setMaisLidos(resultado.results['lists'][8]['books'])
    setIsLoading(false)
  }, [])

  console.log(maisLidos)

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
              <TouchableOpacity>
                <Feather name="search" size={20} color="#828282" />
              </TouchableOpacity>
            }
          />
        </HStack>
        <Text fontSize="18px" fontWeight="bold" ml="16px" mb="16px">
          Para você
        </Text>

        <HStack mx="16px">
          {isLoading ? (
            <Loading />
          ) : (
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={maisLidos}
              keyExtractor={maisLidos => maisLidos.rank}
              renderItem={({ item }) => (
                <CardBook
                  image={item.book_image}
                  title={item.title}
                  autor={item.author}
                />
              )}
            />
          )}
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
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
          {isLoading ? (
            <Loading />
          ) : (
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={maisLidos}
              keyExtractor={maisLidos => maisLidos.rank}
              renderItem={({ item }) => (
                <CardBook
                  image={item.book_image}
                  title={item.title}
                  autor={item.author}
                />
              )}
            />
          )}
        </HStack>
      </ScrollView>
    </VStack>
  )
}
