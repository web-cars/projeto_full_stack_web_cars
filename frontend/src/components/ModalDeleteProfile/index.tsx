import { useContext, useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Flex,
    Text,
    ModalCloseButton
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { UserContext } from "../../context/userContext";


export const DeleteProfileModal = () => {
    const { deleteProfile } = useContext(UserContext)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const styleHover = css`
    &:hover{
        background-color: #FFE5E5;
    }
    `
    
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontSize={"16px"} color={"greyScale.grey-1"}>Excluir perfil
                        
                    </ModalHeader>
                    <ModalCloseButton />
                        <ModalBody pb={6}>
                            <Flex marginBottom={"25px"} fontSize={"16px"} color={ "#000000"} fontWeight={500}>
                                <Text fontSize={"16px"} color={"greyScale.grey-1"}>Tem certeza que deseja excluir seu perfil?</Text>
                            </Flex>
                            <Flex gap={"25px"}>
                                <Text 
                                    position="absolute"                                   
                                    fontSize="16px"
                                    marginBottom="20px">
                                    Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados dos nossos servidores.
                                </Text>
                            </Flex>  
                        </ModalBody>
    
                        <ModalFooter marginTop="100px">
                            <Button bgColor={"#DEE2E6"} mr="4" onClick={onClose} border={"none"} variant={"ghost"} color={"#495057"}>
                                Cancelar
                            </Button>
                            <Button onClick={deleteProfile} type="submit" bgColor={"#FDD8D8"} css={styleHover} color={"#CD2B31"} mr="4">
                                Sim, excluir perfil
                            </Button>
                        </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
    
}