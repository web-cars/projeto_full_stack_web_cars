
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './style/theme'
import { InfoAd } from './components/InfoAd/index';
function App() {


  return (
    <ChakraProvider theme={theme}>
      <InfoAd></InfoAd>
    </ChakraProvider>
  )
}

export default App
