<style>{" "} @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');</style>;
import {
  Button,
  Box,
  FormLabel,
  Input,
  Text,
  Textarea,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { theme } from "../style/theme";
import z from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { IRegister } from "../interfaces/carAds.interface";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { UserContext } from "../context/userContext";
import { ToastContainer } from "react-toastify";

const schema = z.object({
  name: z.string(),
  email: z.string().email('Deve ser um e-mail válido'),
  cpf: z.string().min(11, 'CPF deve ter no mínimo 11 caracteres'),
  cellphone: z.string().regex(/^\(\d{2}\)\s\d{5}-\d{4}$/i, 'Número de telefone inválido'),
  birthDate: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, "Data de nascimento invalida"),
  description: z.string(),
  address: z.object({
    cep: z.string(),
    state: z.string(),
    city: z.string(),
    street: z.string(),
    number: z.string(),
    complement: z.string(),
  }),
  isAdm: z.boolean().optional(),
  password: z.string(),
  confirmationPassword: z.string()
}).refine((data) => data.password === data.confirmationPassword, {
  message: "As senhas devem ser iguais"
})

const Register = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [btnActive, setBtnActive] = useState("comprador");
  const handleButtonClick = (button: React.SetStateAction<string>) => {
    setBtnActive(button);
  };
  const {createUser}= useContext(UserContext)
  const { register, handleSubmit, formState: { errors } } = useForm<IRegister>({ resolver: zodResolver(schema) });
  const onFormSubmit = (formData: any) => {
    formData.address.number =  Number(formData.address.number)
    const parts = formData.birthDate.split('/')
    const day = parts[0]
    const month = parts[1]
    const year = parts[2]
    formData.birthDate = year+'-'+month+'-'+day
    if (btnActive === "comprador") {
      formData.isAdmin = false
    } else {
      formData.isAdmin = true
    }
    createUser(formData)
  };

  return (
    <>
      <Navbar />
      <Box as="main" w="100%" bg={theme.colors.greyScale.grey8}>
        <Flex justifyContent="center" alignItems="center">
          <FormControl color={"greyScale.grey0"} w={isLargerThan768 ? "45%" : "95%"} mb={5} mt={5} bg={theme.colors.greyScale.whiteFixed} p="10" borderRadius={5}>
            <Text fontFamily={"Inter"} fontWeight="medium" mt={4}>Cadastro</Text>
            <Box mt={4}>
              <FormLabel fontFamily={"Inter"} fontWeight="medium">Nome</FormLabel>
              <Input border={"2px solid"} borderColor={"greyScale.grey6"} _hover={{ borderColor: "greyScale.grey5" }} _placeholder={{ color: "greyScale.grey3" }} required {...register("name")} placeholder="Ex: Samuel Leão" />
              {errors.name && (<FormErrorMessage variant="default" >{errors.name.message}</FormErrorMessage>)}
              <FormHelperText>{errors.name?.message}</FormHelperText>
            </Box>
            <Box mt={4}>
              <FormLabel fontFamily={"Inter"} fontWeight="medium">Email</FormLabel>
              <Input border={"2px solid"} borderColor={"greyScale.grey6"} _hover={{ borderColor: "greyScale.grey5" }} _placeholder={{ color: "greyScale.grey3" }}  {...register("email")} placeholder="Ex: samuel@kenzie.com.br" />
              {errors.email && (<FormErrorMessage variant="default" >{errors.email.message}</FormErrorMessage>)}
              <FormHelperText>{errors.email?.message}</FormHelperText>
            </Box>
            <Box mt={4}>
              <FormLabel fontFamily={"Inter"} fontWeight="medium">CPF</FormLabel>
              <Input border={"2px solid"} borderColor={"greyScale.grey6"} _hover={{ borderColor: "greyScale.grey5" }} _placeholder={{ color: "greyScale.grey3" }} {...register("cpf")} placeholder="000.000.000-00" />
              {errors.cpf && (<FormErrorMessage variant="default" >{errors.cpf.message}</FormErrorMessage>)}
              <FormHelperText>{errors.cpf?.message}</FormHelperText>
            </Box>
            <Box mt={4}>
              <FormLabel fontFamily={"Inter"} fontWeight="medium">Celular</FormLabel>
              <Input border={"2px solid"} borderColor={"greyScale.grey6"} _hover={{ borderColor: "greyScale.grey5" }} _placeholder={{ color: "greyScale.grey3" }} {...register("cellphone")} placeholder="(00) 90000-0000" />
            </Box>
            <Box mt={4}>
              <FormLabel fontFamily={"Inter"} fontWeight="medium">Data de nascimento</FormLabel>
              <Input border={"2px solid"} borderColor={"greyScale.grey6"} _hover={{ borderColor: "greyScale.grey5" }} _placeholder={{ color: "greyScale.grey3" }} {...register("birthDate")} placeholder="00/00/00" />
              {errors.birthDate && (<FormErrorMessage variant="default" >{errors.birthDate.message}</FormErrorMessage>)}
              <FormHelperText>{errors.birthDate?.message}</FormHelperText>
            </Box>
            <Box mt={4}>
              <FormLabel fontFamily={"Inter"} fontWeight="medium">Descrição</FormLabel>
              <Textarea border={"2px solid"} borderColor={"greyScale.grey6"} _hover={{ borderColor: "greyScale.grey5" }} _placeholder={{ color: "greyScale.grey3" }} {...register("description")} placeholder="Digitar descrição" />
              {errors.description && (<FormErrorMessage variant="default" >{errors.description.message}</FormErrorMessage>)}
              <FormHelperText>{errors.description?.message}</FormHelperText>
            </Box>
            <Text fontFamily={"Inter"} fontWeight="medium" mt="5">Infomações de endereço</Text>
            <Box mt={4}>
              <FormLabel fontFamily={"Inter"} fontWeight="medium">CEP</FormLabel>
              <Input border={"2px solid"} borderColor={"greyScale.grey6"} _hover={{ borderColor: "greyScale.grey5" }} _placeholder={{ color: "greyScale.grey3" }} {...register("address.cep")} placeholder="00000.000" />
            </Box>
            <Flex justifyContent="space-between">
              <Box mt={4} mr={4}>
                <FormLabel fontFamily={"Inter"} fontWeight="medium">Estado</FormLabel>
                <Input border={"2px solid"} borderColor={"greyScale.grey6"} _hover={{ borderColor: "greyScale.grey5" }} _placeholder={{ color: "greyScale.grey3" }} {...register("address.state")} placeholder="Digitar Estado" />
              </Box>
              <Box mt={4}>
                <FormLabel fontFamily={"Inter"} fontWeight="medium">Cidade</FormLabel>
                <Input border={"2px solid"} borderColor={"greyScale.grey6"} _hover={{ borderColor: "greyScale.grey5" }} _placeholder={{ color: "greyScale.grey3" }} {...register("address.city")} placeholder="Digitar cidade" />
              </Box>
            </Flex>
            <Box mt={4}>
              <FormLabel fontFamily={"Inter"} fontWeight="medium">Rua</FormLabel>
              <Input border={"2px solid"} borderColor={"greyScale.grey6"} _hover={{ borderColor: "greyScale.grey5" }} _placeholder={{ color: "greyScale.grey3" }} {...register("address.street")} placeholder="Digitar Rua" />
            </Box>
            <Flex justifyContent="space-between">
              <Box mt={4} mr={4}>
                <FormLabel fontFamily={"Inter"} fontWeight="medium">Número</FormLabel>
                <Input border={"2px solid"} borderColor={"greyScale.grey6"} _hover={{ borderColor: "greyScale.grey5" }} _placeholder={{ color: "greyScale.grey3" }} {...register("address.number")} placeholder="Digitar número" />
              </Box>
              <Box mt={4}>
                <FormLabel fontFamily={"Inter"} fontWeight="medium">Complemento</FormLabel>
                <Input border={"2px solid"} borderColor={"greyScale.grey6"} _hover={{ borderColor: "greyScale.grey5" }} _placeholder={{ color: "greyScale.grey3" }} {...register("address.complement")} placeholder="Ex: apart 307" />
              </Box>
            </Flex>
            <Text fontFamily={"Inter"} fontWeight="medium" mt="5">Tipo de conta</Text>
            <Flex justifyContent="space-around" alignItems="center" mt={4}>
              <Button
                bg={btnActive === "comprador" ? theme.colors.brand.brand1 : theme.colors.greyScale.whiteFixed}
                color={btnActive === "comprador" ? theme.colors.greyScale.whiteFixed : theme.colors.greyScale.blackFixed}
                border={btnActive === "comprador" ? "none" : "solid"}
                borderWidth={btnActive === "comprador" ? "none" : "1px"}
                onClick={() => handleButtonClick("comprador")}>
                Comprador
              </Button>
              <Button
                bg={btnActive === "anunciante" ? theme.colors.brand.brand1 : theme.colors.greyScale.whiteFixed}
                color={btnActive === "anunciante" ? theme.colors.greyScale.whiteFixed : theme.colors.greyScale.blackFixed}
                border={btnActive === "anunciante" ? "none" : "solid"}
                borderWidth={btnActive === "anunciante" ? "none" : "1px"}
                onClick={() => handleButtonClick("anunciante")}>
                Anunciante
              </Button>
            </Flex>
            <Box mt={4}>
              <FormLabel fontFamily={"Inter"} fontWeight="medium">Senha</FormLabel>
              <Input type='password' border={"2px solid"} borderColor={"greyScale.grey6"} _hover={{ borderColor: "greyScale.grey5" }} _placeholder={{ color: "greyScale.grey3" }} {...register("password")} placeholder="Digitar senha" />
            </Box>
            <Box mt={4}>
              <FormLabel fontFamily={"Inter"} fontWeight="medium">Confirmar Senha</FormLabel>
              <Input type='password' border={"2px solid"} borderColor={"greyScale.grey6"} _hover={{ borderColor: "greyScale.grey5" }} _placeholder={{ color: "greyScale.grey3" }} {...register("confirmationPassword")} placeholder="Digitar senha" />
            </Box>
            <Button mt="5" onClick={handleSubmit(onFormSubmit)} bg={theme.colors.brand.brand1} color={theme.colors.greyScale.whiteFixed} w="100%">
              Finalizar cadastro
            </Button>
            <ToastContainer theme="colored"/>
          </FormControl>
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default Register;
