import { Box, Button, Link, Text } from "@chakra-ui/react";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import { theme } from "../../style/theme";
import { mockUsers } from "../../mock/mock.json";

const AdPforfile = ({nameAd, descriptionUserAd}:any) => {
    const { user } = useContext(UserContext)
    return (
        <Box as='div' bgGradient="linear(to bottom, #4529E6 50%, #F1F3F5 50%)" h="350" display="flex" justifyContent="center" alignItems="center" position="relative" bottom="35.5%" >
            <Box bg='#FDFDFD' w="75%" h="75%" p="9">
                <Text as='span' bg="#4529E6" p='5' borderRadius='100%' color="white">{nameAd.split(" ").map((elem: string) => elem.charAt(0)).join("").slice(0, 2).toUpperCase()}</Text>
                <Box as='div' display="flex">
                    <Text mt="8" >{nameAd.toUpperCase()}</Text>
                    <Link ml="5" mt="9" bg="purple.50" fontSize="2xs" h="5" color="#4529E6" p="0.5" borderRadius="5">Anunciante</Link>
                </Box>
                <Text mt="5">{descriptionUserAd}</Text>
                {/* <Button mt="5" bg="transparent" border="solid" borderColor="purple.600" borderWidth={2} color="purple.600" fontSize="xs">Criar anuncio</Button> */}
            </Box>
        </Box>);
}

export default AdPforfile;  