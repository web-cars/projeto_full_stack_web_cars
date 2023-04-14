import { useParams } from "react-router-dom";
import { CarAdsContext } from "../context/carAds.context";
import { useContext } from "react";
import { Container, Flex, Heading } from "@chakra-ui/react";
import { PrimaryImage } from "../components/Images/PrimaryImage";
import { SecondaryImages } from "../components/Images/SecondaryImages";
import { Description } from "../components/Description";
import { CardProfile } from "../components/CardProfile";
import Footer from "../components/Footer";
import { InfoAd } from "../components/InfoAd";


export const SpecificAd = () => {
  const { id } = useParams<{ id: string }>();

  const { specificAd } = useContext(CarAdsContext)
  const car = `${specificAd?.brand} ${specificAd?.model}`
  return (
    <>
      <Flex w={"100%"} bgColor=' greyScale.grey8' justify={"center"}>

        <Flex h={"90vh"} direction={"column"} wrap={"wrap"} w={"80%"} justify={"flex-start"} p="20px" align={"center"}>
          <PrimaryImage />
          <InfoAd car={car} year={specificAd?.year} price={specificAd?.price} km={specificAd?.kilometers} />
          <Description />

          <SecondaryImages />
          <CardProfile />
        </Flex>
        <Container maxW={"100%"} position={"absolute"} h="55%" bgColor={"brand.brand1"}></Container>
      </Flex>
      <Footer />
    </>
  );
};