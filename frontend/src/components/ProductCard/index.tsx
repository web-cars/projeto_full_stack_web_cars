import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Box,
  Flex,
} from "@chakra-ui/react";

export const ProductCard = () => {
  return (
    <>
      <Card backgroundColor={"transparent"} maxW="sm">
        <CardBody
          borderRadius={"4px"}
          backgroundColor={"white"}
          padding={"0 0 12px 0"}
        >
          <Box backgroundColor={"greyScale.grey7"} padding={"0 25px"}>
            <Image
              margin={"0 auto"}
              width={"85%"}
              src="src/components/ProductCard/carMock.png"
              alt="Car"
            />
          </Box>
          <Stack mt="6" spacing="3" padding={"0 25px"}>
            <Heading
              fontSize="md"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="elipsis"
              color={"greyScale.grey1"}
            >
              Product title stays here - max 1 line Product title stays here -
              maximum 1 line
            </Heading>
            <Text
              overflow="hidden"
              textOverflow={"ellipsis"}
              fontSize={"14px"}
              whiteSpace="nowrap"
              color={"greyScale.grey2"}
              fontWeight={"400"}
            >
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Flex flexDirection={"row"} gap={"8px"} alignItems={"center"}>
              <Image
                src="src/components/ProductCard/carMock.png"
                borderRadius={"50%"}
                width={"30px"}
                height={"30px"}
              ></Image>
              <Text
                color={"greyScale.grey2"}
                fontSize={"14px"}
                fontFamily={"Inter, sans-serif"}
                fontWeight={"500"}
              >
                Anunciante
              </Text>
            </Flex>

            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Flex gap="10px">
                <Text
                  padding={"4px 8px"}
                  backgroundColor={"brand.brand"}
                  color={"brand.brand1"}
                  fontSize={"14px"}
                  variant="solid"
                  colorScheme="blue"
                  fontWeight={"500"}
                  borderRadius={"4px"}
                >
                  0 KM
                </Text>
                <Text
                  borderRadius={"4px"}
                  backgroundColor={"brand.brand"}
                  padding={"4px 8px"}
                  color={"brand.brand1"}
                  fontSize={"14px"}
                  variant="ghost"
                  fontWeight={"500"}
                  colorScheme="blue"
                >
                  2019
                </Text>
              </Flex>

              <Text
                fontSize={"md"}
                color={"greyScale.grey1"}
                fontWeight={"500"}
              >
                R$ 00.000,00
              </Text>
            </Flex>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
    </>
  );
};
