import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './style/theme'
import { ButtonMode } from './components/DarkMode/index';
import Header from './components/Header';

function App() {


  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <ButtonMode/>
    </ChakraProvider>
  )
}

export default App
