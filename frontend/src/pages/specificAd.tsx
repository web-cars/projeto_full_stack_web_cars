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
import { css } from "@emotion/react";
import { theme } from "../style/theme";

export const SpecificAd = () => {
  const mobile = css`
    @media (max-width: 1024px) {
      flex-wrap: nowrap;
      width: 100%;
      height: max-content;
      gap: 20px;
    }
    `;

  const { id } = useParams<{ id: string }>();
  const { specificAd, carAds } = useContext(CarAdsContext);
  const car = `${specificAd?.brand} ${specificAd?.model}`;
  const userAdespecific: any = carAds?.advertisements.filter(elem=> elem.id===id)
  const cellPhone = userAdespecific[0].user.cellphone.replace(/\D/g, "")

  return (
    <>
      <Navbar />
      <Flex bgGradient="linear(to-b, #4529E6 60%, #FFFFFF 40%)" p="5" justifyContent='end'>
        <Flex flexDir='column' alignItems='center' w='90%' gap='4'>
          <PrimaryImage />
          <InfoAd car={specificAd?.brand} year={specificAd?.year} km={specificAd?.kilometers} price={specificAd?.price} cellPhone={cellPhone}/>
          <Description description={specificAd?.description}/>
        </Flex>
        <Flex flexDirection="column" gap="5" position='relative' right='13%'>
          <SecondaryImages />
          <CardProfile />
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};
