import { Box, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { CarAdsContext } from "../../../context/carAds.context";
import { css } from "@emotion/react";

export const PrimaryImage = () => {
  const { specificAd } = useContext(CarAdsContext);
  const divMobile = css`
  @media (max-width:1024px) {
     width: 100%;
    
  }
  `

  return (
    <Box
      css={divMobile}
      backgroundColor={"greyScale.grey10"}
      borderRadius={"4px"}
      boxSize={"sm"}
      w={"60%"}
      position={'relative'}
      as="figure" 
      h='22em'
      p="5"
    >
      <Image
        src={specificAd?.images[0].file}
        alt={`Foto de capa: ${specificAd?.brand} ${specificAd?.model}`}
        objectFit="cover"
        h={"100%"}
        margin={"0 auto"}

      ></Image>
    </Box>
  );
};
