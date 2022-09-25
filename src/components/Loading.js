//este componente vai ser apresentado no comeco da aplicao antes do carregamento total.

import { Center } from 'native-base'
import LottieView from 'lottie-react-native'

export function Loading() {
  return (
    <Center flex={1} bg="transparent">
      <LottieView
        source={require('../../assets/LoadingBook.json')}
        autoPlay
        loop
        style={{ width: 200 }}
      />
    </Center>
  )
}
