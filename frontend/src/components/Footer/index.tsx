import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { ChevronUpIcon } from '@chakra-ui/icons'

const Footer = () => {
  return (
    <Box bg={"black"} w="100%" position="fixed" bottom="0">
      <Flex h="10vh" alignItems="center" justifyContent="space-between" px="46.5px" color="white">
        <Box>
          <Text as="span" fontSize={"x-large"} fontWeight={"semibold"} mr={2}>Motors</Text>
          <Text as="span">Shop</Text>
        </Box>
        <Text textAlign="center" fontSize={"xs"}>© 2022 - Todos os direitos reservados.</Text>
        <Icon as={ChevronUpIcon} w={6} h={6} transition="background-color 0.3s, , rounded: full" color="gray" _hover={{ bg: "gray.400", rounded: "5" }} />
      </Flex>
    </Box>
  );
};

export default Footer;