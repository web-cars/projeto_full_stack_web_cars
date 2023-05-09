<style>{" "} @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');</style>;
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
import React, { useContext } from "react";
import z from "zod"
import { theme } from "../../style/theme";
import { useForm } from "react-hook-form";
import { IAdress } from "../../interfaces/carAds.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../context/userContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = z.object({
    cep: z.string(),
    state: z.string(),
    city: z.string(),
    street: z.string(),
    number: z.string(),
    complement: z.string(),
})

const ModalEditAdress = () => {
    const {editAdress} =useContext(UserContext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const {register, handleSubmit, formState: {errors}} = useForm<IAdress>({resolver: zodResolver(schema)})
    const onFormSubmit = (formData: any) => {
      const newformdata: any = {}
      for (const chave in formData) {
          if (formData[chave] !== "") {
              newformdata[chave] = formData[chave];
          }
        }
        editAdress(newformdata)
    }
    return ( 
        <>
        <Button onClick={onOpen}  bg="transparent" color="black" fontWeight="0" fontSize="ls">Editar endereço</Button>  
        <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent w="95%">
            <ModalHeader>Editar endereço</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <Text color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium" mt="5">Infomações de endereço</Text>
              <FormControl>
              <Box mt={4}>
                <FormLabel color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium">CEP</FormLabel>
                <Input {...register("cep")}  placeholder="00000.000" />
              </Box>
              <Flex justifyContent="space-between">
                <Box mt={4} mr={4}>
                  <FormLabel color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium">Estado</FormLabel>
                  <Input {...register("state")} placeholder="Digitar Estado" />
                </Box>
                <Box mt={4}>
                  <FormLabel color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium">Cidade</FormLabel>
                  <Input {...register("city")} placeholder="Digitar cidade" />
                </Box>
              </Flex>
              <Box mt={4}>
                <FormLabel color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium">Rua</FormLabel>
                <Input {...register("street")} placeholder="Digitar Rua" />
              </Box>
              <Flex justifyContent="space-between">
                <Box mt={4} mr={4}>
                  <FormLabel color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium">Número</FormLabel>
                  <Input {...register("number")} placeholder="Digitar número" />
                </Box>
                <Box mt={4}>
                  <FormLabel color={"greyScale.grey0"} fontFamily={"Inter"} fontWeight="medium">Complemento</FormLabel>
                  <Input {...register("complement")} placeholder="Ex: apart 307" />
                </Box>
              </Flex>
              </FormControl>
            </ModalBody>
              <ModalFooter>
              <Button onClick={onClose} mr={3}>Cancelar</Button>
              <Button colorScheme='blue' 
              onClick={handleSubmit(onFormSubmit)}
              bg={theme.colors.brand.brand1} color={theme.colors.greyScale.whiteFixed} w="50%">Salvar alterações</Button>
              <ToastContainer />
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
     );
}
 
export default ModalEditAdress;


