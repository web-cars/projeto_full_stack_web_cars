import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Navbar } from "../components/Navbar";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { IUser } from "../interface";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

const schema = z.object({
  email: z.string().nonempty("Email é obrigatório").email("Email inválido"),
  password: z.string().nonempty("Senha é obrigatória"),
});

export const Login = () => {
  const { onSubmitLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
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
  `;

  return (
    <Flex css={main}>
      <Navbar />
      <Box
        p={"44px 48px"}
        margin={"0 auto"}
        w="full"
        maxW="md"
        borderWidth="1px"
        borderRadius="lg"
        backgroundColor={"greyScale.whiteFixed"}
      >
        <Heading
          marginBottom={"32px"}
          fontWeight={"500"}
          color={"greyScale.blackFixed"}
          fontSize={"24px"}
        >
          Login
        </Heading>
        <form onSubmit={handleSubmit(onSubmitLogin)}>
          <FormControl marginBottom={"22px"}>
            <FormLabel color={"greyScale.grey1"} fontWeight={"500"}>
              Usuário
            </FormLabel>
            <Input
              {...register("email")}
              placeholder="Digitar usuário"
              border={"1px solid var(--chakra-colors-greyScale-grey6)"}
              color={"greyScale.grey1"}
            />
            <Text
              position="absolute"
              right="5px"
              color="feedback.alert1"
              fontSize="12px"
              borderRadius="4px"
              marginBottom="20px"
            >
              {errors.email?.message}
            </Text>
          </FormControl>
          <FormControl id="password" mt={4}>
            <FormLabel fontWeight={"500"} color={"greyScale.grey1"}>
              Senha
            </FormLabel>
            <Input
              {...register("password")}
              type="password"
              color={"greyScale.grey1"}
              placeholder="Digitar senha"
              border={"1px solid var(--chakra-colors-greyScale-grey6)"}
            />
            <Text
              position="absolute"
              right="5px"
              color="feedback.alert1"
              fontSize="12px"
              borderRadius="4px"
              marginBottom="20px"
            >
              {errors.password?.message}
            </Text>

            <FormHelperText
              textAlign={"end"}
              color={"greyScale.grey2"}
              fontWeight={"500"}
            >
              Esqueci minha senha
            </FormHelperText>
          </FormControl>
          <Button
            width={"100%"}
            backgroundColor={"brand.brand1"}
            color={"greyScale.whiteFixed"}
            type="submit"
            mt={8}
            colorScheme="blue"
            fontWeight="600"
          >
            Entrar
          </Button>
        </form>
        <Flex direction={"column"} mt={8}>
          <Text
            marginBottom={"24px"}
            textAlign={"center"}
            color={"greyScale.grey2"}
            mr={2}
          >
            Ainda não possui conta?
          </Text>
          <Link
            style={{
              width: "100%",
              border: "1px solid #ADB5BD",
              borderRadius: "4px",
              color: "#0B0D0D",
              textAlign: "center",
              padding: "7px 0",
              fontWeight: "600",
            }}
            to="/register"
          >
            Cadastrar
          </Link>
        </Flex>
      </Box>
      <Footer />
    </Flex>
  );
};
