import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './style/theme'
import { AdsProvider } from './context/carAds.context'
import { RoutesMain } from './routes';
import { UserProvider } from './context/userContext';



function App() {
  return (
    <UserProvider>
      <AdsProvider>
        <ChakraProvider theme={theme}>
          <RoutesMain />
        </ChakraProvider>
      </AdsProvider>
    </UserProvider>
  )
}

export default App

