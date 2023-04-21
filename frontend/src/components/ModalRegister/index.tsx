<style>
  {" "}
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
</style>;
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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { theme } from "../../style/theme";
import z from "zod";
import { useForm } from "react-hook-form";

const ModalRegister = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [btnActive, setBtnActive] = useState("comprador");
  const handleButtonClick = (button: React.SetStateAction<string>) => {
    setBtnActive(button);
  };

  const { register, handleSubmit } = useForm();
  const onFormSubmit = (formData: any) => {
    console.log(formData);
  };

  return (
    <>
      <Button onClick={onOpen} variant="ghost" fontSize="md" fontWeight="normal" border={"1px"} borderColor={"greyScale.grey0"} color={"greyScale.grey0"}>
        Cadastrar
      </Button>
      <Modal initialFocusRef={initialRef}  finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontFamily={"Inter"}>Cadastro</ModalHeader>
          <Text ml={6} fontFamily={"Inter"} fontWeight="medium" mt="5">
            Infomações pessoais
          </Text>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Box>
                <FormLabel fontFamily={"Inter"} fontWeight="medium">
                  Nome
                </FormLabel>
                <Input {...register("name")} placeholder="Ex: Samuel Leão" />
              </Box>
              <Box mt={4}>
                <FormLabel fontFamily={"Inter"} fontWeight="medium">
                  Email
                </FormLabel>
                <Input
                  {...register("email")}
                  placeholder="Ex: samuel@kenzie.com.br"
                />
              </Box>
              <Box mt={4}>
                <FormLabel fontFamily={"Inter"} fontWeight="medium">
                  CPF
                </FormLabel>
                <Input {...register("cpf")} placeholder="000.000.000-00" />
              </Box>
              <Box mt={4}>
                <FormLabel fontFamily={"Inter"} fontWeight="medium">
                  Celular
                </FormLabel>
                <Input
                  {...register("cellphone")}
                  placeholder="(DDD) 90000-0000"
                />
              </Box>
              <Box mt={4}>
                <FormLabel fontFamily={"Inter"} fontWeight="medium">
                  Data de nascimento
                </FormLabel>
                <Input {...register("birthDate")} placeholder="00/00/00" />
              </Box>
              <Box mt={4}>
                <FormLabel fontFamily={"Inter"} fontWeight="medium">
                  Descrição
                </FormLabel>
                <Textarea
                  {...register("description")}
                  placeholder="Digitar descrição"
                />
              </Box>
              <Text fontFamily={"Inter"} fontWeight="medium" mt="5">
                Infomações de endereço
              </Text>
              <Box mt={4}>
                <FormLabel fontFamily={"Inter"} fontWeight="medium">
                  CEP
                </FormLabel>
                <Input {...register("address.cep")} placeholder="00000.000" />
              </Box>
              <Flex justifyContent="space-between">
                <Box mt={4} mr={4}>
                  <FormLabel fontFamily={"Inter"} fontWeight="medium">
                    Estado
                  </FormLabel>
                  <Input
                    {...register("address.state")}
                    placeholder="Digitar Estado"
                  />
                </Box>
                <Box mt={4}>
                  <FormLabel fontFamily={"Inter"} fontWeight="medium">
                    Cidade
                  </FormLabel>
                  <Input
                    {...register("address.city")}
                    placeholder="Digitar cidade"
                  />
                </Box>
              </Flex>
              <Box mt={4}>
                <FormLabel fontFamily={"Inter"} fontWeight="medium">
                  Rua
                </FormLabel>
                <Input
                  {...register("address.street")}
                  placeholder="Digitar Rua"
                />
              </Box>
              <Flex justifyContent="space-between">
                <Box mt={4} mr={4}>
                  <FormLabel fontFamily={"Inter"} fontWeight="medium">
                    Número
                  </FormLabel>
                  <Input
                    {...register("address.number")}
                    placeholder="Digitar número"
                  />
                </Box>
                <Box mt={4}>
                  <FormLabel fontFamily={"Inter"} fontWeight="medium">
                    Complemento
                  </FormLabel>
                  <Input
                    {...register("address.complement")}
                    placeholder="Ex: apart 307"
                  />
                </Box>
              </Flex>
              <Text fontFamily={"Inter"} fontWeight="medium" mt="5">
                Tipo de conta
              </Text>
              <Flex justifyContent="space-around" alignItems="center" mt={4}>
                <Button
                  bg={
                    btnActive === "comprador"
                      ? theme.colors.brand.brand1
                      : theme.colors.greyScale.whiteFixed
                  }
                  color={
                    btnActive === "comprador"
                      ? theme.colors.greyScale.whiteFixed
                      : theme.colors.greyScale.blackFixed
                  }
                  onClick={() => handleButtonClick("comprador")}
                >
                  Comprador
                </Button>
                <Button
                  bg={
                    btnActive === "anunciante"
                      ? theme.colors.brand.brand1
                      : theme.colors.greyScale.whiteFixed
                  }
                  color={
                    btnActive === "anunciante"
                      ? theme.colors.greyScale.whiteFixed
                      : theme.colors.greyScale.blackFixed
                  }
                  onClick={() => handleButtonClick("anunciante")}
                >
                  Anunciante
                </Button>
              </Flex>
              <Box mt={4}>
                <FormLabel fontFamily={"Inter"} fontWeight="medium">
                  Senha
                </FormLabel>
                <Input placeholder="Digitar senha" />
              </Box>
              <Box mt={4}>
                <FormLabel fontFamily={"Inter"} fontWeight="medium">
                  Confirmar Senha
                </FormLabel>
                <Input placeholder="Digitar senha" />
              </Box>
              <Button
                mt="5"
                onClick={handleSubmit(onFormSubmit)}
                bg={theme.colors.brand.brand1}
                color={theme.colors.greyScale.whiteFixed}
                w="100%"
              >
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
