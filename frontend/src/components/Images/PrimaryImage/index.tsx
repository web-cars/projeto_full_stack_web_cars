import { Box, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { CarAdsContext } from "../../../context/carAds.context";

export const PrimaryImage = () => {
  const { specificAd } = useContext(CarAdsContext);

  return (
    <Box
      backgroundColor={"greyScale.grey10"}
      borderRadius={"4px"}
      boxSize={"sm"}
    >
      <Image
        src={specificAd?.image[0].file}
        alt={`Foto de capa: ${specificAd?.brand} ${specificAd?.model}`}
        objectFit="contain"
        boxSize="80%"
        margin={"0 auto"}
      ></Image>
    </Box>
  );
};
