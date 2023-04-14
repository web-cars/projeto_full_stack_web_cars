
import { ChakraProvider, DarkMode } from '@chakra-ui/react'
import { theme } from './style/theme'
import { AdsProvider } from './context/carAds.context'
import { StyleModal } from './components/Modal/index';
import { Image } from '@chakra-ui/react';
import Banner from './components/Banner';

function App() {


  return (

    <AdsProvider>
      <ChakraProvider theme={theme}>
        <Banner/>
      </ChakraProvider>
    </AdsProvider>

  )
}

export default App
