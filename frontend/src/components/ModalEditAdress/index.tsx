import { Box, Button, 
        Flex, 
        FormControl, 
        FormLabel, 
        Input, Modal, 
        ModalBody, 
        ModalCloseButton, 
        ModalContent, 
        ModalFooter, ModalHeader, 
        ModalOverlay, 
        Text, 
        useDisclosure } from "@chakra-ui/react";
import React from "react";
import { theme } from "../../style/theme";

const ModalEditAdress = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    return ( 
        <>
        <Button onClick={onOpen}>Editar endereço</Button>  
        <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Editar endereço</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <Text color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium" mt="5">Infomações de endereço</Text>
              <FormControl>
              <Box mt={4}>
                <FormLabel color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium">CEP</FormLabel>
                <Input placeholder="00000.000" />
              </Box>
              <Flex justifyContent="space-between">
                <Box mt={4} mr={4}>
                  <FormLabel color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium">Estado</FormLabel>
                  <Input placeholder="Digitar Estado" />
                </Box>
                <Box mt={4}>
                  <FormLabel color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium">Cidade</FormLabel>
                  <Input  placeholder="Digitar cidade" />
                </Box>
              </Flex>
              <Box mt={4}>
                <FormLabel color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium">Rua</FormLabel>
                <Input  placeholder="Digitar Rua" />
              </Box>
              <Flex justifyContent="space-between">
                <Box mt={4} mr={4}>
                  <FormLabel color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium">Número</FormLabel>
                  <Input  placeholder="Digitar número" />
                </Box>
                <Box mt={4}>
                  <FormLabel color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium">Complemento</FormLabel>
                  <Input placeholder="Ex: apart 307" />
                </Box>
              </Flex>
              </FormControl>
            </ModalBody>
              <ModalFooter>
              <Button onClick={onClose} mr={3}>Cancelar</Button>
              <Button colorScheme='blue' bg={theme.colors.brand.brand1} color={theme.colors.greyScale.whiteFixed} w="50%">Salvar alterações</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
     );
}
 
export default ModalEditAdress;


