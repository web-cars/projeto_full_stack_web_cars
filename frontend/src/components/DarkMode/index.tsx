import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { 
  Flex,
  HStack, 
  useColorMode, 
  Button 
} from '@chakra-ui/react'

export const ButtonMode = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex height={'10vh'} justifyContent={'flex-end'} alignItems={'center'} >
            <HStack gap={'5'} marginEnd={'10px'}>
              <Button 
                onClick={() => toggleColorMode()}
                pos={'absolute'}
                top={'0'}
                right={'0'}
                m={'1rem'}
              >
                {colorMode === 'dark' 
                  ? <SunIcon/> 
                  : <MoonIcon/>}
              </Button>
            </HStack>
        </Flex>
        )
    }
