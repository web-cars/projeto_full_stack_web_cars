import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './style/theme'
import { ButtonMode } from './components/DarkMode/index';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {


  return (
    <main>
      <ChakraProvider theme={theme}>
          <Navbar/>
          <Header/>
          <ButtonMode/>
      </ChakraProvider>

    </main>

  )
}

export default App
