import { useParams } from "react-router-dom";
import { CarAdsContext } from "../context/carAds.context";
import { useContext } from "react";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { PrimaryImage } from "../components/Images/PrimaryImage";
import { SecondaryImages } from "../components/Images/SecondaryImages";
import { Description } from "../components/Description";
import { CardProfile } from "../components/CardProfile";
import Footer from "../components/Footer";
import { InfoAd } from "../components/InfoAd";
import { Navbar } from "../components/Navbar";
import { css } from '@emotion/react';

export const SpecificAd = () => {
  const { id } = useParams<{ id: string }>();
  
  const mobile = css`
  @media (max-width:1024px) {
    flex-wrap: nowrap;
    width: 100%;
    height: max-content;
    gap: 20px;
  }
  `

  const { specificAd } = useContext(CarAdsContext)
  const car = `${specificAd?.brand} ${specificAd?.model}`
  return (
    <>
      <Navbar />
      <Flex w={"100%"} bgColor=' greyScale.grey8' justify={"center"}>
        <Flex css={mobile} h={"90vh"} direction={"column"} w={"80%"} justify={"flex-start"} p="20px" align={"center"} gap='2'>
          <Box as='div' h='100%' w='100%'>
            <PrimaryImage/>
            <SecondaryImages />
          </Box>
            <InfoAd car={car} year={specificAd?.year} price={specificAd?.price} km={specificAd?.kilometers} />
            <Description />
          <Box as='div' w='100%'>
            <CardProfile />
          </Box>
        </Flex>
        <Container maxW={"100%"} position={"absolute"} h="55%" bgColor={"brand.brand1"}></Container>
      </Flex>
      <Footer />
    </>
  );
};
