import { Avatar, Box, Link, Text, useMediaQuery } from "@chakra-ui/react";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";

const AdPforfile = ({nameAd, descriptionUserAd}:any) => {
    const [isLargerThan1025] = useMediaQuery("(min-width: 1025px)");
    return (
        <Box as='div' bgGradient="linear(to bottom, #4529E6 50%, #F1F3F5 50%)" h="350" display="flex" justifyContent="center" alignItems="center" position="relative" bottom="35.5%" >
            <Box bg='#FDFDFD' w="75%" h="75%" p="9">
            <Avatar size="xl" name={nameAd} />
                <Box as='div' display="flex">
                    <Text mt="8" >{nameAd.toUpperCase()}</Text>
                    <Text as='span' bg="purple.50" position='relative' bottom= '40px' fontSize="2xs" h="5" color="#4529E6" p="0.5" borderRadius="5">Anunciante</Text>
                </Box>
                <Text mt="5" color={'black'} overflow='hidden' whiteSpace={isLargerThan1025 ? 'normal' : 'nowrap' } textOverflow='ellipsis'>{descriptionUserAd}</Text>
            </Box>
        </Box>);
}

export default AdPforfile;  