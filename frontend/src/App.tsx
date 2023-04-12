
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './style/theme'

import { AdsProvider } from './context/carAds.context'
import { StyleModal } from './components/Modal/index';
import { Image } from '@chakra-ui/react';

function App() {


  return (
    <AdsProvider>
      <ChakraProvider theme={theme}>
        <h1>Hello</h1>
      </ChakraProvider>
    </AdsProvider>


  )
}

export default App
