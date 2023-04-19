import { Box, Button, Link, Text } from "@chakra-ui/react";

const AdPforfile = () => {
    return (
    <Box as='div' bgGradient="linear(to bottom, purple.600 50%, white 50%)" h="350" display="flex"  justifyContent="center" alignItems="center">
        <Box bg='#FDFDFD' w="75%" h="75%"  p="9">
            <Text  as='span' bg="purple.600" p='5' borderRadius='100%' color="white">SL</Text>
            <Box as='div' display="flex">
                <Text mt="5" >Samuel Leão</Text>
                <Link ml="5" mt="6" bg="#EDEAFD" fontSize="2xs" h="5"  color="purple.600" p="0.5" borderRadius="5">Anunciante</Link>
            </Box>
            <Text mt="5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
            <Button mt="5" bg="transparent" border="solid" borderColor="purple.600" borderWidth={2} color="purple.600" fontSize="xs">Criar anuncio</Button>
        </Box>
    </Box> );
}
 
export default AdPforfile;