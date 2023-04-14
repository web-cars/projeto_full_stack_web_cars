import { Box, Flex, Text, Icon, useMediaQuery } from "@chakra-ui/react";
import { ChevronUpIcon } from '@chakra-ui/icons'

const Footer = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Box bg={"black"} w="100%" bottom="0" h="max-content" >
      <Flex h="10vh" alignItems="center" justifyContent="space-between" px="46.5px" color="white" flexDirection={isLargerThan768 ? "row" : "column"}>
        <Box>
          <Text as="span" fontSize={"x-large"} fontWeight={"semibold"} mr={2}>Motors</Text>
          <Text as="span">Shop</Text>
        </Box>
        <Text textAlign="center" fontSize={"xs"}>© 2022 - Todos os direitos reservados.</Text>
        <a href="#topo">
          <Icon as={ChevronUpIcon} w={6} h={6} transition="background-color 0.3s, , rounded: full" color="gray" _hover={{ bg: "gray.400", rounded: "5" }} />
        </a>
      </Flex>
    </Box>
  );
};

export default Footer;