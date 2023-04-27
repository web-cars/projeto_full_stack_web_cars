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
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { css } from "@emotion/react";

const schema = z
  .object({
    password: z.string().nonempty("Senha é obrigatória"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas devem ser iguais",
    path: ["confirmPassword"],
  });

interface IResetPassword {
  password: string;
  confirmPassword: string;
}
export const ResetPassword = () => {
  const { onSubmitResetPassword } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IResetPassword>({
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
          Escolha sua senha
        </Heading>
        <form onSubmit={handleSubmit(onSubmitResetPassword)}>
          <FormControl marginBottom={"22px"}>
            <FormLabel
              htmlFor="usuário"
              color={"greyScale.grey1"}
              fontWeight={"500"}
            >
              Senha
            </FormLabel>
            <Input
              {...register("password")}
              placeholder="Digite sua senha"
              border={"1px solid var(--chakra-colors-greyScale-grey6)"}
              color={"greyScale.grey1"}
              type="password"
            />
            <FormErrorMessage
              position="absolute"
              right="5px"
              color="feedback.alert1"
              fontSize="12px"
              borderRadius="4px"
              marginBottom="20px"
            >
              {errors.password?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl marginBottom={"22px"}>
            <FormLabel
              htmlFor="usuário"
              color={"greyScale.grey1"}
              fontWeight={"500"}
            >
              Confirme a senha
            </FormLabel>
            <Input
              {...register("confirmPassword")}
              placeholder="Confirme sua senha"
              border={"1px solid var(--chakra-colors-greyScale-grey6)"}
              color={"greyScale.grey1"}
              type="password"
            />
            <FormErrorMessage
              position="absolute"
              right="5px"
              color="feedback.alert1"
              fontSize="12px"
              borderRadius="4px"
              marginBottom="20px"
            >
              {errors.confirmPassword?.message}
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
            Confirmar
          </Button>
        </form>
      </Box>
      <Footer />
    </Flex>
  );
};
