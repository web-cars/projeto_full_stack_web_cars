
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './style/theme'
import { StyleModal } from './components/Modal/index';
import { Image } from '@chakra-ui/react';
import Car from './assets/carexample.svg'
function App() {


  return (
    <ChakraProvider theme={theme}>
      <StyleModal>
        <Image src={Car} alt='Carro exemplo' />
      </StyleModal>
    </ChakraProvider>
  )
}

export default App
