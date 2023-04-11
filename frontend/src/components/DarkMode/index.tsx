import { Flex, HStack, Button, useColorMode, LightMode } from '@chakra-ui/react'

export const ButtonMode = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex height={'10vh'} justifyContent={'flex-end'} alignItems={'center'} >
            <HStack gap={'5'} marginEnd={'10px'}>
                <LightMode>
                    <Button colorScheme={'purple'} onClick={toggleColorMode}>
                        Change Theme
                    </Button>
                </LightMode>
            </HStack>
        </Flex>
        )
    }
