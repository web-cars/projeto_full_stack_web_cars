<style>{" "} @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');</style>;
import {
  Button,
  Box,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  Textarea,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { theme } from "../../style/theme";
import z from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { IRegister } from "../../interfaces/carAds.interface";

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

const ModalRegister = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [btnActive, setBtnActive] = useState("comprador");
  const handleButtonClick = (button: React.SetStateAction<string>) => {
    setBtnActive(button);
  };

  const { register, handleSubmit, formState: { errors } } = useForm<IRegister>({ resolver: zodResolver(schema) });
  const onFormSubmit = (formData: any) => {
    if (btnActive === "comprador") {
      formData.isAdmin = false
    } else {
      formData.isAdmin = true
    }
    console.log(formData)
  };

  return (
    <>
      <Button onClick={onOpen} variant="ghost" fontSize="md" fontWeight="normal" border={"1px"} borderColor={"greyScale.grey0"} color={"greyScale.grey0"}>
        Cadastrar
      </Button>
      <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color={"greyScale.grey0"}>
          <ModalHeader color={"greyScale.grey0"} fontFamily={"Inter"}>Cadastro</ModalHeader>
          <Text ml={6} color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium" mt="5">Infomações pessoais</Text>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Box mt={4}>
                <FormLabel color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium">Nome</FormLabel>
                <Input required {...register("name")} placeholder="Ex: Samuel Leão" />
                {errors.name && (<FormErrorMessage variant="default" >{errors.name.message}</FormErrorMessage>)}
                <FormHelperText>{errors.name?.message}</FormHelperText>
              </Box>
              <Box mt={4}>
                <FormLabel color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium">Email</FormLabel>
                <Input {...register("email")} placeholder="Ex: samuel@kenzie.com.br" />
                {errors.email && (<FormErrorMessage variant="default" >{errors.email.message}</FormErrorMessage>)}
                <FormHelperText>{errors.email?.message}</FormHelperText>
              </Box>
              <Box mt={4}>
                <FormLabel color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium">CPF</FormLabel>
                <Input {...register("cpf")} placeholder="000.000.000-00" />
                {errors.cpf && (<FormErrorMessage variant="default" >{errors.cpf.message}</FormErrorMessage>)}
                <FormHelperText>{errors.cpf?.message}</FormHelperText>
              </Box>
              <Box mt={4}>
                <FormLabel color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium">Celular</FormLabel>
                <Input {...register("cellphone")} placeholder="(DDD) 90000-0000" />
              </Box>
              <Box mt={4}>
                <FormLabel color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium">Data de nascimento</FormLabel>
                <Input {...register("birthDate")} placeholder="00/00/00" />
                {errors.birthDate && (<FormErrorMessage variant="default" >{errors.birthDate.message}</FormErrorMessage>)}
                <FormHelperText>{errors.birthDate?.message}</FormHelperText>
              </Box>
              <Box mt={4}>
                <FormLabel color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium">Descrição</FormLabel>
                <Textarea {...register("description")} placeholder="Digitar descrição" />
                {errors.description && (<FormErrorMessage variant="default" >{errors.description.message}</FormErrorMessage>)}
                <FormHelperText>{errors.description?.message}</FormHelperText>
              </Box>
              <Text color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium" mt="5">Infomações de endereço</Text>
              <Box mt={4}>
                <FormLabel color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium">CEP</FormLabel>
                <Input {...register("address.cep")} placeholder="00000.000" />
              </Box>
              <Flex justifyContent="space-between">
                <Box mt={4} mr={4}>
                  <FormLabel color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium">Estado</FormLabel>
                  <Input {...register("address.state")} placeholder="Digitar Estado" />
                </Box>
                <Box mt={4}>
                  <FormLabel color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium">Cidade</FormLabel>
                  <Input {...register("address.city")} placeholder="Digitar cidade" />
                </Box>
              </Flex>
              <Box mt={4}>
                <FormLabel color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium">Rua</FormLabel>
                <Input {...register("address.street")} placeholder="Digitar Rua" />
              </Box>
              <Flex justifyContent="space-between">
                <Box mt={4} mr={4}>
                  <FormLabel color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium">Número</FormLabel>
                  <Input {...register("address.number")} placeholder="Digitar número" />
                </Box>
                <Box mt={4}>
                  <FormLabel color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium">Complemento</FormLabel>
                  <Input {...register("address.complement")} placeholder="Ex: apart 307" />
                </Box>
              </Flex>
              <Text color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium" mt="5">Tipo de conta</Text>
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
                <Input {...register("password")} placeholder="Digitar senha" />
              </Box>
              <Box mt={4}>
                <FormLabel fontFamily={"Inter"} fontWeight="medium">Confirmar Senha</FormLabel>
                <Input {...register("confirmationPassword")} placeholder="Digitar senha" />
              </Box>
              <Button mt="5" onClick={handleSubmit(onFormSubmit)} bg={theme.colors.brand.brand1} color={theme.colors.greyScale.whiteFixed} w="100%">
                Finalizar cadastro
              </Button>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalRegister;
