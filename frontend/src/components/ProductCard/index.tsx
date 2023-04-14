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
import { iCarAdsInterface } from "../../interfaces/carAds.interface";
import { CarAdsContext } from "../../context/carAds.context";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ id, kilometers, fipePrice, price, isActive, description, brand, images, model, year, fuel_type, iColor }: iCarAdsInterface) => {
  const { onGetSpecificAd, getCarAds } = useContext(CarAdsContext)

  return (
    <>
      {isActive ? (
        <Link to={`/adCar/${id}`} style={{ width: "30%" }}>
          <Card backgroundColor={"transparent"} margin={"0"} maxW="sm" onClick={() => onGetSpecificAd(id)}>
            <CardBody
              borderRadius={"4px"}
              backgroundColor={"white"}
              padding={"0 0 12px 0"}
              h={'380px'}
            >
              <Box backgroundColor={"greyScale.grey7"} padding={"0 25px"}>
                <Image
                  margin={"0 auto"}
                  width={"85%"}
                  src={images[0].file}
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
                  {model}
                </Heading>
                <Text
                  overflow="hidden"
                  textOverflow={"ellipsis"}
                  fontSize={"14px"}
                  whiteSpace="nowrap"
                  color={"greyScale.grey2"}
                  fontWeight={"400"}
                  height={"30px"}
                >
                  {description || 'Não possui descrição'}
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
                      {kilometers}KM
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
                      {year}
                    </Text>
                  </Flex>

                  <Text
                    fontSize={"md"}
                    color={"greyScale.grey1"}
                    fontWeight={"500"}
                  >
                    R$ {price}
                  </Text>
                </Flex>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </Link>
      ) : (<></>)}

    </>
  );
};
