import {
  Box,
  Flex,
  Button,
  Text,
  UnorderedList,
  Stack,
  Avatar,
  Container
} from "@chakra-ui/react";
import { ProductCard } from './../components/ProductCard/index';
import { CarAdsContext } from "../context/carAds.context";
import { useContext } from "react";
import { iCarAdsInterface } from './../interfaces/carAds.interface';
import { Navbar } from './../components/Navbar/index';
import Footer from './../components/Footer/index';
import { UserContext } from "../context/userContext";
import { ProfileAds } from "../components/profileAds";
import { AddCarModal } from "../components/ModalAddAd";

export const ViewUser = () => {

  const { carAds } = useContext(CarAdsContext)
  const { user }:any = useContext(UserContext)
  console.log(user)
  return (
    <>
      <Navbar />
      <Flex
        gap={2}
        width={"100%"}
        justifyContent={"center"}
        direction={["column", null, "row"]}
        alignItems={["center", null, "flex-start"]}
      >
        <Container maxW={"100%"} position={"absolute"} h="435px" bgColor={"brand.brand1"} zIndex={'-1'} />
        <Box
          position={"relative"}
          top="30px"
          width={["90%", null, "75%", null, "60%"]}
          marginRight={0}
          alignItems={"center"}
        >
          <Flex
            direction={"column"}
            w={"100%"}
            gap={10}
            justifyContent={"center"}
          >
            <Box
              backgroundColor={"greyScale.whiteFixed"}
              h="350"
              width={"100%"}
              borderRadius={5}
              p={7}
              display={"flex"}
              flexDirection={"column"}
              gap={7}
              justifyContent={"center"}
              marginTop={75}
            >
              <Stack direction="row" alignItems="center">
                <Avatar size="xl" name={user.name} />
              </Stack>
              <Box
                display={"flex"}
                flexDirection={["column", "row"]}
                justifyContent={"space-between"}
                alignItems={["flex-start", "center"]}
                gap={5}
              >
                <Box display={"flex"} gap={3} alignItems={"center"}>
                  <Text fontFamily={"Lexend"} fontWeight={600} color={"greyScale.grey1"}>
                    {user.name}
                  </Text>
                  <Button
                    h={"30px"}
                    backgroundColor={"brand.brand4"}
                    color={"brand.brand2"}
                    size="sm"
                    cursor={"unset"}
                  >
                    Anunciante
                  </Button>
                </Box>
              </Box>
              <Text color={"greyScale.grey2"}>
                {user.description}
              </Text>
              <AddCarModal/>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={{ base: "column", md: "column" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ base: "4px", md: "20px" }}
        padding={"30px"}
        paddingTop={"60px"}
        backgroundColor={"greyScale.grey8"}
      >

        <Box
          display={"flex"}
          flexDirection={{ base: "column", md: "row-reverse" }}
          width={{ base: "auto", md: "100%" }}
          maxWidth={"1600px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <UnorderedList
            paddingRight={{ base: "5px", md: "0px" }}
            display="flex"
            flexWrap={{ base: "nowrap", md: "wrap" }}
            overflowX={{ base: "auto" }}
            gap={{ base: "25px", md: "20px" }}
            listStyleType="none"
            flex={{ base: "auto", md: 1 }}
            maxWidth={{ base: "auto", md: "auto" }}
            style={{ width: "100%", paddingRight: "5px" }}
            justifyContent={"center"}
          >

            {user && user?.advertisements?.length > 0 ? user?.advertisements?.map((card: iCarAdsInterface) => {

              return (<>


                < ProfileAds
                  key={card.id}
                  id={card.id}
                  kilometers={card.kilometers}
                  fipePrice={card.fipePrice}
                  price={card.price}
                  isActive={card.isActive}
                  description={card.description}
                  brand={card.brand}
                  images={card.images}
                  model={card.model}
                  year={card.year}
                  fuel_type={card.fuel_type}
                  color={card.color}
                  user={user}
                />
              </>
              )
            })
              : (<Text> Você ainda não possui anuncios!</Text>)}

          </UnorderedList>
        </Box>
        <Flex gap={"5px"}>
          <Text color={"greyScale.grey3"}>1</Text>
          <Text color={"greyScale.grey5"}>de</Text>
          <Text color={"greyScale.grey5"}>2</Text>
        </Flex>
        <Button
          display={"flex"}
          width={"100px"}
          backgroundColor={"transparent"}
          color={"brand1"}
        >
          Seguinte &gt;
        </Button>
      </Box>
      <Footer />
    </>
  );
};
