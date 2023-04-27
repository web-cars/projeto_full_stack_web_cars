import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Navbar } from "../components/Navbar";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

const schema = z.object({
  email: z.string().nonempty("Email é obrigatório").email("Email inválido"),
});

interface ISendEmail {
  email: string;
}
export const SendEmail = () => {
  const { onSubmitSendEmail, resetToken } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ISendEmail>({
    resolver: zodResolver(schema),
  });

  const main = css`
    width: 100%;
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: space-between;
    flex-direction: column;
    height: 100vh;
    background-color: var(--chakra-colors-greyScale-grey8);

    input::placeholder {
      color: #868e96;
    }

    a:hover {
      color: var(--chakra-colors-brand-brand2);
    }
  `;

  return (
    <Flex css={main}>
      <Navbar />
      {!resetToken ? (
        <Box
          p={"44px 48px"}
          margin={"0 auto"}
          w="full"
          maxW="md"
          borderWidth="1px"
          borderRadius="lg"
          backgroundColor={"greyScale.whiteFixed"}
        >
          {" "}
          <Heading
            marginBottom={"32px"}
            fontWeight={"500"}
            color={"greyScale.blackFixed"}
            fontSize={"24px"}
          >
            Recuperação de senha
          </Heading>
          <form onSubmit={handleSubmit(onSubmitSendEmail)}>
            <FormControl marginBottom={"22px"}>
              <FormLabel
                htmlFor="usuário"
                color={"greyScale.grey1"}
                fontWeight={"500"}
                marginBottom={"28px"}
              >
                Coloque seu endereço de e-mail cadastrado
              </FormLabel>
              <Input
                {...register("email")}
                placeholder="Digite seu e-mail"
                border={"1px solid var(--chakra-colors-greyScale-grey6)"}
                color={"greyScale.grey1"}
              />
              <FormErrorMessage
                position="absolute"
                right="5px"
                color="feedback.alert1"
                fontSize="12px"
                borderRadius="4px"
                marginBottom="20px"
              >
                {errors.email?.message}
              </FormErrorMessage>
            </FormControl>

            <Button
              isLoading={isSubmitting}
              type="submit"
              width={"100%"}
              backgroundColor={"brand.brand1"}
              color={"greyScale.whiteFixed"}
              mt={8}
              colorScheme="blue"
              fontWeight="600"
            >
              Enviar
            </Button>
          </form>
          <Flex direction={"column"} mt={8}>
            <Text
              marginBottom={"24px"}
              textAlign={"center"}
              color={"greyScale.grey2"}
              mr={2}
            >
              <Link to={"/"}>Ir para os anúncios como visitante</Link>
            </Text>
          </Flex>
        </Box>
      ) : (
        <Text
          textAlign={"center"}
          fontSize={"32px"}
          color={"greyScale.grey1"}
          fontWeight={"500"}
        >
          Verifique seu e-mail
        </Text>
      )}
      <Footer />
    </Flex>
  );
};
