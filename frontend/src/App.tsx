
import { ChakraProvider, DarkMode } from '@chakra-ui/react'
import { theme } from './style/theme'
import { AdsProvider } from './context/carAds.context'
import { CardProfile } from './components/CardProfile';

function App() {


  return (

    <AdsProvider>
      <ChakraProvider theme={theme}>
        <CardProfile/>
      </ChakraProvider>
    </AdsProvider>

  )
}

export default App
