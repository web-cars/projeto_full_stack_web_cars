import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { CarAdsContext } from "../../../context/carAds.context";

export const SecondaryImages = () => {
  const { specificAd } = useContext(CarAdsContext);

  return (
    <Box
      backgroundColor={"greyScale.grey10"}
      padding={"36px 44px"}
      borderRadius={"4px"}
      width={"60%"}
    >
      <Heading
        marginBottom={"32px"}
        color={"greyScale.grey1"}
        fontSize={"20px"}
      >
        Fotos
      </Heading>

      <Flex max-width={"440px"} flexWrap={"wrap"} gap={"14px"}>
        {specificAd?.image &&
          specificAd?.image.map((image) => [
            <Flex
              alignItems={"center"}
              backgroundColor={"greyScale.grey7"}
              borderRadius={"4px"}
              boxSize={"108px"}
            >
              <Image
                src={image.file}
                alt={`${specificAd.brand} ${specificAd.model}`}
                objectFit="contain"
                boxSize="80%"
                margin={"0 auto"}
              ></Image>
            </Flex>,
          ])}
      </Flex>
    </Box>
  );
};
