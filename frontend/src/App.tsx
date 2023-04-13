
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './style/theme'
import { AdsProvider } from './context/carAds.context'
import { RoutesMain } from './routes';


function App() {

  return (
    <AdsProvider>
      <ChakraProvider theme={theme}>
        <RoutesMain />
      </ChakraProvider>
    </AdsProvider>
  )
}

export default App

