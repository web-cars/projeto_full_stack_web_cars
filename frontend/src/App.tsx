
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './style/theme'
import { AdsProvider } from './context/carAds.context'
import { StyleModal } from './components/Modal/index';
import { Image } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import { ButtonMode } from './components/DarkMode/index';
import { CardProfile } from './components/CardProfile';


function App() {

  return (
    <AdsProvider>
      <ChakraProvider theme={theme}>

      </ChakraProvider>
    </AdsProvider>
  )
}

export default App

