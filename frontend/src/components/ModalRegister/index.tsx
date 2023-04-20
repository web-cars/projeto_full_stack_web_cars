import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  Textarea,
  Flex,
  ButtonGroup,
  extendTheme,
  withDefaultColorScheme
} from "@chakra-ui/react";
<style> @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');</style>
import React, { useState } from "react";
import { theme } from "../../style/theme";

const ModalRegister = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [btnActive, setBtnActive] = useState('comprador')
    const handleButtonClick = (button: React.SetStateAction<string>) =>{
      setBtnActive(button)
    }

  return (
    <>
      <Button onClick={onOpen} variant="ghost" fontSize="md" fontWeight="normal" border={"1px"} borderColor={"greyScale.grey0"} color={"greyScale.grey0"}>Cadastrar</Button>
      <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontFamily={'Inter'}>Cadastro</ModalHeader>
          <Text  ml={6} fontFamily={'Inter'} fontWeight="medium" mt="5">Infomações pessoais</Text>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel fontFamily={'Inter'} fontWeight="medium">Nome</FormLabel>
              <Input ref={initialRef} placeholder="Ex: Samuel Leão" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel fontFamily={'Inter'} fontWeight="medium">Email</FormLabel>
              <Input placeholder="Ex: samuel@kenzie.com.br" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel fontFamily={'Inter'} fontWeight="medium">CPF</FormLabel>
              <Input placeholder="000.000.000-00" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel fontFamily={'Inter'} fontWeight="medium">Celular</FormLabel>
              <Input placeholder="(DDD) 90000-0000" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel fontFamily={'Inter'} fontWeight="medium">Data de nascimento</FormLabel>
              <Input placeholder="00/00/00" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel fontFamily={'Inter'} fontWeight="medium">Descrição</FormLabel>
              <Textarea placeholder='Digitar descrição' />
            </FormControl>

            <Text fontFamily={'Inter'} fontWeight="medium" mt="5">Infomações de endereço</Text>

            <FormControl mt={4}>
              <FormLabel fontFamily={'Inter'} fontWeight="medium">CEP</FormLabel>
              <Input placeholder="00000.000" />
            </FormControl>

            <Flex justifyContent="space-between">
              <FormControl mt={4} mr={4}>
                <FormLabel fontFamily={'Inter'} fontWeight="medium">Estado</FormLabel>
                <Input placeholder="Digitar Estado" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel fontFamily={'Inter'} fontWeight="medium">Cidade</FormLabel>
                <Input placeholder="Digitar cidade" />
              </FormControl>
            </Flex>

            <FormControl mt={4}>
              <FormLabel fontFamily={'Inter'} fontWeight="medium">Rua</FormLabel>
              <Input placeholder="Digitar Rua" />
            </FormControl>


            <Flex justifyContent="space-between">
              <FormControl mt={4} mr={4}>
                <FormLabel fontFamily={'Inter'} fontWeight="medium">Número</FormLabel>
                <Input placeholder="Digitar número" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel fontFamily={'Inter'} fontWeight="medium">Complemento</FormLabel>
                <Input placeholder="Ex: apart 307" />
              </FormControl>
            </Flex>

            <Text fontFamily={'Inter'} fontWeight="medium" mt="5">Tipo de conta</Text>

            <Flex justifyContent="space-around" alignItems="center" mt={4}>
              <Button 
              bg={btnActive === 'comprador' ? theme.colors.brand.brand1 : theme.colors.greyScale.whiteFixed}
              color={btnActive === 'comprador' ? theme.colors.greyScale.whiteFixed : theme.colors.greyScale.blackFixed}
              onClick={() => handleButtonClick('comprador')}>Comprador</Button>

              <Button
               bg={btnActive === 'anunciante' ? theme.colors.brand.brand1 : theme.colors.greyScale.whiteFixed}
               color={btnActive === 'anunciante' ? theme.colors.greyScale.whiteFixed : theme.colors.greyScale.blackFixed}
               onClick={() => handleButtonClick('anunciante')}>Anunciante</Button>  
            </Flex>

            <FormControl mt={4}>
                <FormLabel fontFamily={'Inter'} fontWeight="medium">Senha</FormLabel>
                <Input placeholder="Digitar senha" />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel fontFamily={'Inter'} fontWeight="medium">Confirmar Senha</FormLabel>
                <Input placeholder="Digitar senha" />
            </FormControl>
              
          </ModalBody>
          <ModalFooter>
            <Button bg={theme.colors.brand.brand1} color={theme.colors.greyScale.whiteFixed} w="100%">Finalizar cadastro</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalRegister;
