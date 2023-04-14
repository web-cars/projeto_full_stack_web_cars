import { Box, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { CarAdsContext } from "../../../context/carAds.context";

export const PrimaryImage = () => {
  const { specificAd } = useContext(CarAdsContext);
  console.log(specificAd);

  return (
    <Box
      backgroundColor={"greyScale.grey10"}
      borderRadius={"4px"}
      boxSize={"sm"}
      w={"55%"}
      zIndex={1}
    >
      <Image
        src={specificAd?.images[0].file}
        alt={`Foto de capa: ${specificAd?.brand} ${specificAd?.model}`}
        objectFit="cover"
        boxSize="100%"
        h={"100%"}
        margin={"0 auto"}

      ></Image>
    </Box>
  );
};
