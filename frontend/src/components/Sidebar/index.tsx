import { Box, List, ListItem, Input, Flex, Text, useMediaQuery, Button } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";



const Sidebar = () => {
    const navigate = useNavigate();
    // const handleFilter = () => {
    //     navigate("/register")
    //   }

    const [isLargerThan768] = useMediaQuery("(max-width: 1024px)");

    const brands = ["Fiat", "Ford", "Volkswagen", "Chevrolet", "Renault"];
    const models = ["Civic", "Corolla", "Cruze", "Fit", "Gol", "Ka", "Onix", "Pulse"]
    const colors = ["Azul", "Branca", "Cinza", "Prata", "Preta", "Verde"]
    const years = ["2022", "2021", "2018", "2015", "2013"]
    const fuelTypes = ["Diesel", "Etanol", "Gasolina", "Flex"]
    
        
    return (
        <Box bg="white" color="black" w="25%" h="100vh" left="0" p="4" display={isLargerThan768 ? "none" : "block"}>
            {/* <Flex justifyContent="space-around" align="center" >
                <Text >Filtros</Text>
                <Text color="gray.300">x</Text>
            </Flex> */}
            <List mt="5px" ml="3" fontSize="small">
                <ListItem mb="4" fontWeight="bold" fontSize="small">Marca
                    <List ml="4" mt="4" color="gray.500" cursor={"pointer"}>{brands.map((marca, index) => (<ListItem key={index}>{marca}</ListItem>))}</List>
                </ListItem>
                <ListItem mb="4" fontWeight="bold">Modelo
                    <List ml="4" mt="4" color="gray.500" cursor={"pointer"}>{models.map((marca, index) => (<ListItem key={index}>{marca}</ListItem>))}</List>
                </ListItem>
                <ListItem mb="4" fontWeight="bold">Cor
                    <List ml="4" mt="4" color="gray.500" cursor={"pointer"}>{colors.map((marca, index) => (<ListItem key={index}>{marca}</ListItem>))}</List>
                </ListItem>
                <ListItem mb="4" fontWeight="bold">Ano
                    <List ml="4" mt="4" color="gray.500" cursor={"pointer"}>{years.map((marca, index) => (<ListItem key={index}>{marca}</ListItem>))}</List>
                </ListItem>
                <ListItem mb="4" fontWeight="bold">Combustível
                    <List ml="4" mt="4" color="gray.500" cursor={"pointer"}>{fuelTypes.map((marca, index) => (<ListItem key={index}>{marca}</ListItem>))}</List>
                </ListItem>
                <ListItem mb="4" fontWeight="bold">Km
                    <List mt="4">
                        <ListItem maxW="400px">
                            <Input bg="gray.300" w="38%" _placeholder={{ color: 'greyScale.grey3' }} placeholder='Mínima' border="none" mr="2" borderRadius="0" fontSize="small" />
                            <Input bg="gray.300" w="38%" _placeholder={{ color: 'greyScale.grey3' }} placeholder='Máxima' border="none" ml="" borderRadius="0" fontSize="small" />
                        </ListItem>
                    </List>
                </ListItem>
                <ListItem mb="4" fontWeight="bold">Preço
                    <List mt="4">
                        <ListItem maxW="400px">
                            <Input bg="gray.300" _placeholder={{ color: 'greyScale.grey3' }} w="38%" placeholder='Mínimo' border="none" mr="2" borderRadius="0" fontSize="small" />
                            <Input bg="gray.300" _placeholder={{ color: 'greyScale.grey3' }} w="38%" placeholder='Máximo' border="none" ml="" borderRadius="0" fontSize="small" />
                        </ListItem>
                    </List>
                </ListItem>
                <Box display={isLargerThan768 ? "none" : "block"}>
                    <Flex justifyContent="center" align="center">
                        <Button bg="#5126EA" color="white" top="0" left="-9" p="4" w="73%" borderRadius="3">Limpar Filtros</Button>
                    </Flex>
                </Box>
            </List>

        </Box>
    );
}

export default Sidebar;

