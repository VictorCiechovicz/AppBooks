import React from 'react'
import {TouchableOpacity} from 'react-native'
import {VStack,Box,Text} from 'native-base'


export default function CardCategoria(props){
  
  return( 
         <VStack mr="12px">
      <Box w="74px" h="74px" borderRadius="4px" bg={props.color}></Box>
      <Text fontSize="14px" fontWeight="700">{props.title}</Text>
      </VStack>
      
  )
}