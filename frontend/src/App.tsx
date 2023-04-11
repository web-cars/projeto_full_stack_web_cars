
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './style/theme'
import { ButtonMode } from './components/DarkMode/index';
import Footer from './components/Footer';
function App() {


  return (
    <ChakraProvider theme={theme}>
      <ButtonMode/>
      <Footer/>
    </ChakraProvider>
  )
}

export default App
