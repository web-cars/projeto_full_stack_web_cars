import { Box, Button, Link, Text } from "@chakra-ui/react";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";

const AdPforfile = () => {
    const { user } = useContext(UserContext)

    return (
        <Box as='div' bgGradient="linear(to bottom, purple.600 50%, white 50%)" h="350" display="flex" justifyContent="center" alignItems="center" position="relative" bottom="35.5%">
            <Box bg='#FDFDFD' w="75%" h="75%" p="9">
                <Text as='span' bg="purple.600" p='5' borderRadius='100%' color="white">{user?.name.split(" ").map((elem) => elem.charAt(0)).join("").slice(0, 2)}</Text>
                <Box as='div' display="flex">
                    <Text mt="5" >{user?.name}</Text>
                    <Link ml="5" mt="6" bg="purple.50" fontSize="2xs" h="5" color="purple.600" p="0.5" borderRadius="5">Anunciante</Link>
                </Box>
                <Text mt="5">{user?.description}</Text>
                <Button mt="5" bg="transparent" border="solid" borderColor="purple.600" borderWidth={2} color="purple.600" fontSize="xs">Criar anuncio</Button>
            </Box>
        </Box>);
}

export default AdPforfile;