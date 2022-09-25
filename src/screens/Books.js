import React, { useEffect, useState } from 'react'
import { VStack, FlatList, Text, HStack, Image } from 'native-base'
import { Loading } from '../components/Loading'


import BuscaTodosLivros from '../services/BuscaTodosLivros'

export default function Books() {
  const [isLoading, setIsLoading] = useState(true)
  const [maisLidos, setMaisLidos] = useState([])

  useEffect(async () => {
    const resultado = await BuscaTodosLivros()

    setMaisLidos(resultado.results)
    setIsLoading(false)
    //console.log(resultado.results['lists'][8])
  }, [])



  return (
    <VStack flex={1}>
      <HStack
        alignItems="flex-start"
        justifyContent="center"
        mt="50px"
        mb="28px"
      >
        <Text fontSize="34px" fontWeight="bold" marginRight="194px">
          Books
        </Text>
      </HStack>
      <VStack alignItems="center" >
        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={maisLidos['lists'][8]['books']}
            keyExtractor={maisLidos => maisLidos.rank}
            renderItem={({ item }) => (
              <VStack  mb="50px">
                <Image
                  source={{ uri: item.book_image }}
                  w="300px"
                  h="450px"
                  borderRadius="4px"
                  alt="livros"
                 
                />
                <HStack    w="300px" h="100px">
                  <Text fontSize="30px" fontWeight="700" l>
                    {item.title}
                  </Text>
                </HStack>
                <HStack w="300px" h="30px">
                  <Text fontSize="22px" fontWeight="400">
                    {item.author}
                  </Text>
                </HStack>
              </VStack>
            )}
          />
        )}
      </VStack>
    </VStack>
  )
}
