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
    useMediaQuery,
    Avatar,
    Button,
} from "@chakra-ui/react";
import { iCarAdsInterface } from "../../interfaces/carAds.interface";
import { CarAdsContext } from "../../context/carAds.context";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { css } from '@emotion/react';
import { EditAds } from "../ModalEditAd";


export const ProfileAds = ({ id, kilometers, fipePrice, price, isActive, description, brand, images, model, year, fuel_type, color, user }: iCarAdsInterface) => {
    const { onGetSpecificAd, getCarAds } = useContext(CarAdsContext)
    const [isLargerThan1024] = useMediaQuery("(max-width: 1024px)");
    const navigate = useNavigate()
    const {carAds} = useContext(CarAdsContext)
    const userAdespecific: any = carAds?.advertisements?.find(elem=> elem.id == id)
    useEffect(() => {
        return getCarAds(1);
    }, [id]);

    return (
        <>
            {isActive ? (
                <Box as="div" style={{ width: isLargerThan1024 ? "100%" : "24%" }}>
                    <Card mb={"10px"} backgroundColor={"transparent"} marginTop={"0"} maxW="sm" onClick={() => onGetSpecificAd(id)}>
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
                                    height={"150px"}
                                    src={images[0].file}
                                    alt="Car"
                                    objectFit={"cover"}
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
                    <Flex gap={"10px"}>
                        <EditAds id={id}/>
                        <Link to={`/adCar/${id}`} style={{ width: isLargerThan1024 ? "100%" : "24%" }}></Link>
                        <Button
                            key={id}
                            fontSize={12}
                            w={120}
                            h={10}
                            border={"2px"}
                            color={"greyScale.grey2"}
                            cursor={"pointer"}
                            borderColor={"greyScale.grey2"}
                            bg={'transparent'}
                            onClick={()=> navigate(`/adCar/${id}`)} 
                        >
                            Ver Detalhes
                        </Button>
                    </Flex>
                </Box>
            ) : (<></>)}

        </>
    );
};
