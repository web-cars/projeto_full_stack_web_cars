
import { ChakraProvider, DarkMode } from '@chakra-ui/react'
import { theme } from './style/theme'
import { AdsProvider } from './context/carAds.context'
import { StyleModal } from './components/Modal/index';
import { Image } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';

function App() {


  return (

    <AdsProvider>
      <ChakraProvider theme={theme}>
        <Sidebar/>
      </ChakraProvider>
    </AdsProvider>

  )
}

export default App
