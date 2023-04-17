import { Box, Image, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import bannerImage from "../../assets/Photo.png";
import { css } from '@emotion/react';
const Banner = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const imageStyle = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background-image: url('${bannerImage}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
    mix-blend-mode: multiply;
    pointer-events: none;
  }`
    ;
  return (
    <Stack direction={["column", "row"]} spacing="24px">
      <Box
        css={imageStyle}
      >
        <Text color="white" zIndex={3} align="center" mt={isLargerThan768 ? '0' : '-20'} p={isLargerThan768 ? '0' : '1'}>
          <Text as="span" fontWeight="bold" fontSize="3xl"> Motors Shop</Text>
          <Box as="br" />
          <Text fontSize="2xl">A melhor plataforma de anúncios de carros do país</Text>
        </Text>
      </Box>
    </Stack>
  );
};

export default Banner;