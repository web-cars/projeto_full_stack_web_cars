
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './style/theme'
import { ButtonMode } from './components/DarkMode/index';
function App() {


  return (
    <ChakraProvider theme={theme}>
      <ButtonMode/>
    </ChakraProvider>
  )
}

export default App
