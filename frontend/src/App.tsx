
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './style/theme'
function App() {


  return (
    <ChakraProvider theme={theme}>
    </ChakraProvider>
  )
}

export default App
