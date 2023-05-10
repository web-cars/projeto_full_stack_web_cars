import { Box, List, ListItem, Input, Flex, Text, useMediaQuery, Button } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CarAdsContext } from "../../context/carAds.context";
import { ISelect } from "../../interfaces/carAds.interface";


const Sidebar = () => {
    const navigate = useNavigate();
    const [select,setSelect] = useState<ISelect>(selectDefaultValues) 
    const { filter, setFilter, filterCardAds, getCarAds } = useContext(CarAdsContext);

    const handleFilterClick = (data:string,type:string) => {
        if(type === "BRAND"){
            select.brand = data
        }else if(type === "COLOR"){
            select.color = data
        }else if(type === "MODEL"){
            select.model = data
        }else if(type === "YEAR"){
            select.year = data
        }else if(type === "FUEL_TYPE"){
            select.fuel_type = data
        }
        filterCardAds(select)
    }

    const handleFilterRange = (data:any,type:string) => {
        if(type === "KILOMETERS_MIN"){
            select.kilometers_min = parseFloat(data)
        }else if(type === "KILOMETERS_MAX"){
            select.kilometers_max = parseFloat(data)
        }
        if(type === "PRICE_MIN"){
            select.price_min = parseFloat(data)
        }else if(type === "PRICE_MAX"){
            select.price_max = parseFloat(data)
        }
        setTimeout(() => {
           filterCardAds(select)
        },2000)
       
    }

    const handleCleanFilter = () =>{
        filterCardAds( {
            color: '',
            model: '',
            brand: '',
            year: '',
            fuel_type: '',
            kilometers_min: 0,
            kilometers_max: 0,
            price_min: 0,
            price_max: 0,
          })
    }

    const [isLargerThan768] = useMediaQuery("(max-width: 1024px)");

    const brands = ["Fiat", "Ford", "Volkswagen", "Chevrolet", "Renault", "Citroën"];
    const models = ["Civic", "Corolla", "Cruze", "Fit", "Gol", "Ka", "Onix", "Pulse"]
    const colors = ["Azul", "Branco", "Cinza", "Prata", "Preto", "Verde"]
    const years = ["2022", "2021", "2020", "2018", "2015", "2013"]
    const fuelTypes = ["Diesel", "Etanol", "Gasolina", "Flex"]
    
        
    return (
        <Box bg="white" color="black" w="25%" h="100vh" left="0" p="4" display={isLargerThan768 ? "none" : "block"}>
            {/* <Flex justifyContent="space-around" align="center" >
                <Text >Filtros</Text>
                <Text color="gray.300">x</Text>
            </Flex> */}
            <List mt="5px" ml="3" fontSize="small">
                <ListItem mb="4" fontWeight="bold" fontSize="small">Marca
                    <List ml="4" mt="4" color="gray.500" cursor={"pointer"}>{brands.map((data, index) => (<ListItem onClick={() => handleFilterClick(data,"BRAND")} key={index}>{data}</ListItem>))}</List>
                </ListItem>
                <ListItem mb="4" fontWeight="bold">Modelo
                    <List ml="4" mt="4" color="gray.500" cursor={"pointer"}>{models.map((data, index) => (<ListItem onClick={() => handleFilterClick(data,"MODEL")} key={index}>{data}</ListItem>))}</List>
                </ListItem>
                <ListItem mb="4" fontWeight="bold">Cor
                    <List ml="4" mt="4" color="gray.500" cursor={"pointer"}>{colors.map((data, index) => (<ListItem onClick={() => handleFilterClick(data,"COLOR")}  key={index}>{data}</ListItem>))}</List>
                </ListItem>
                <ListItem mb="4" fontWeight="bold">Ano
                    <List ml="4" mt="4" color="gray.500" cursor={"pointer"}>{years.map((data, index) => (<ListItem onClick={() => handleFilterClick(data,"YEAR")} key={index}>{data}</ListItem>))}</List>
                </ListItem>
                <ListItem mb="4" fontWeight="bold">Combustível
                    <List ml="4" mt="4" color="gray.500" cursor={"pointer"}>{fuelTypes.map((data, index) => (<ListItem onClick={() => handleFilterClick(data,"FUEL_TYPE")} key={index}>{data}</ListItem>))}</List>
                </ListItem>
                <ListItem mb="4" fontWeight="bold">Km
                    <List mt="4">
                        <ListItem maxW="400px">
                            <Input onChange={(e) => handleFilterRange(e.target.value,"KILOMETERS_MIN")}  bg="gray.300" w="38%" _placeholder={{ color: 'greyScale.grey3' }} placeholder='Mínima' border="none" mr="2" borderRadius="0" fontSize="small" />
                            <Input onChange={(e) => handleFilterRange(e.target.value,"KILOMETERS_MAX")} bg="gray.300" w="38%" _placeholder={{ color: 'greyScale.grey3' }} placeholder='Máxima' border="none" ml="" borderRadius="0" fontSize="small" />
                        </ListItem>
                    </List>
                </ListItem>
                <ListItem mb="4" fontWeight="bold">Preço
                    <List mt="4">
                        <ListItem maxW="400px">
                            <Input onChange={(e) => handleFilterRange(e.target.value,"PRICE_MIN")}  bg="gray.300" _placeholder={{ color: 'greyScale.grey3' }} w="38%" placeholder='Mínimo' border="none" mr="2" borderRadius="0" fontSize="small" />
                            <Input onChange={(e) => handleFilterRange(e.target.value,"PRICE_MAX")}  bg="gray.300" _placeholder={{ color: 'greyScale.grey3' }} w="38%" placeholder='Máximo' border="none" ml="" borderRadius="0" fontSize="small" />
                        </ListItem>
                    </List>
                </ListItem>
                <Box display={isLargerThan768 ? "none" : "block"}>
                    <Flex justifyContent="center" align="center">
                        <Button onClick={handleCleanFilter} bg="#5126EA" color="white" top="0" left="-9" p="4" w="73%" borderRadius="3">Limpar Filtros</Button>
                    </Flex>
                </Box>
            </List>

        </Box>
    );
}

export default Sidebar;

const selectDefaultValues = {
    model: '',
    color: '',
    brand: '',
    year: '',
    fuel_type: '',
    kilometers_min: 0,
    kilometers_max: 0,
    price_min: 0,
    price_max: 0,
  };

