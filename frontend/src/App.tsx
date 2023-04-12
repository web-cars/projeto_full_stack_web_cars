
import { ChakraProvider, DarkMode } from '@chakra-ui/react'
import { theme } from './style/theme'
import { ButtonMode } from './components/DarkMode';
function App() {


  return (
    <ChakraProvider theme={theme}>
      <ButtonMode></ButtonMode>
    </ChakraProvider>
  )
}

export default App
