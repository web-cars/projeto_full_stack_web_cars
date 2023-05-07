import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";

export const Description = () => {
  const divMobile = css`
  @media (max-width:1024px) {
     width: 100%;
    
  }
  `
  return (
    <Flex
      css={divMobile}
      backgroundColor={"greyScale.grey10"}
      flexDirection={"column"}
      gap={"32px"}
      borderRadius={"4px"}
      justifyContent={"center"}
      border={"none"}
      w={"60%"}
      // zIndex={1}
    >
      <Box as='div' p='5'>
        <Text color={"greyScale.grey1"} fontSize={"20px"} fontFamily={"Lexend"} mb='4'>
          Descrição
        </Text>
        <Text color={"greyScale.grey2"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </Box>
    </Flex>
  );
};
