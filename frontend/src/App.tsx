
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './style/theme'
import { AdsProvider } from './context/carAds.context'
import { ButtonMode } from './components/DarkMode/index';
import { CardProfile } from './components/CardProfile';

function App() {

  return (
    <AdsProvider>
      <ChakraProvider theme={theme}>
        <CardProfile/>
        <ButtonMode/>
      </ChakraProvider>
    </AdsProvider>
  )
}

export default App

