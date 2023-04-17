import { Flex, Heading, Text } from "@chakra-ui/react";
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
      padding={"36px 44px"}
      gap={"32px"}
      borderRadius={"4px"}
      justifyContent={"center"}
      border={"none"}
      w={"55%"}
      zIndex={1}
    >
      <Heading
        color={"greyScale.grey1"}
        fontSize={"20px"}
        fontFamily={"Lexend"}
      >
        Descrição
      </Heading>
      <Text color={"greyScale.grey2"}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
    </Flex>
  );
};
