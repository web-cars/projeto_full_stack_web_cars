import { Box, Image, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import bannerImage from "../../assets/Photo.png";

const Banner = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Stack direction={["column", "row"]} spacing="24px">
      <Box
        w="100vw"
        h="100%"
        bgGradient="linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        opacity="1"
      >
        <Image
          mt={isLargerThan768? "0": "100"}
          zIndex="-1"
          boxSize={isLargerThan768 ? ["100%", "45%"]: ["100%", "70%"]}
          backgroundSize="cover"
          src={bannerImage}
        />
        <Text color="white" position="fixed" align="center" mt={isLargerThan768 ?'0': '-20'} p={isLargerThan768 ? '0':'1'}>
          <Text as="span" fontWeight="bold" fontSize="3xl"> Motors Shop</Text>
          <Box as="br" />
          <Text fontSize="2xl">A melhor plataforma de anúncios de carros do país</Text>
        </Text>
      </Box>
    </Stack>
  );
};

export default Banner;