
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './style/theme'
import { AdsProvider } from './context/carAds.context'
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
