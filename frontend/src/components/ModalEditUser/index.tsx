import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
    Button,
    Textarea,
    useDisclosure,
    ModalFooter,
    Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { css } from "@emotion/react";

const schema = z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    cpf: z.string().optional(),
    cellphone: z.string().optional(),
    birthDate: z.string().optional(),
    description: z.string().optional(),
});

export const EditPersonModal = () => {
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclosure();
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({
        resolver: zodResolver(schema)
    });
    const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`

    const styleHover = css`
    &:hover{
        background-color: var(--chakra-colors-brand-brand1);
    }
    `


    return (
        <>
            <Button onClick={onOpen} mt="5" bg="transparent" border="solid" borderColor="purple.600" borderWidth={2} color="purple.600" fontSize="xs">Editar perfil</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontSize={"16px"} color={"greyScale.grey-1"}>Adicionar pessoa</ModalHeader>
                    <ModalCloseButton />
                    <form>
                        <ModalBody>
                            <FormControl mb="4">
                                <FormLabel fontSize={"14px"}>Nome</FormLabel>
                                <Input type="text" {...register("name")} placeholder="Digite o nome da pessoa" />
                            </FormControl>
                            <FormControl mb="4">
                                <FormLabel fontSize={"14px"}>E-mail</FormLabel>
                                <Input type="text" {...register("email")} placeholder="Digite o e-mail da pessoa" />
                                <Text position="absolute" right="5px" color="feedback.alert1" fontSize="12px" borderRadius="4px" marginBottom="20px">
                                </Text>
                            </FormControl>
                            <FormControl mb="4">
                                <FormLabel fontSize={"14px"}>CPF</FormLabel>
                                <Input type="text" {...register("cpf")} placeholder="Digite o CPF da pessoa" />
                            </FormControl>
                            <FormControl mb="4">
                                <FormLabel fontSize={"14px"}>Telefone celular</FormLabel>
                                <Input type="text" {...register("cellphone")} placeholder="Digite o telefone celular da pessoa" />
                            </FormControl>
                            <FormControl mb="4">
                                <FormLabel fontSize={"14px"}>Data de nascimento</FormLabel>
                                <Input type="date" {...register("birthDate")} placeholder="Digite a data de nascimento da pessoa" />
                            </FormControl>
                            <FormControl mb="4">
                                <FormLabel fontSize={"14px"}>Descrição</FormLabel>
                                <Textarea {...register("description")} placeholder={lorem} name="description" />
                                <Text
                                    position="absolute"
                                    right="5px"
                                    color="feedback.alert1"
                                    fontSize="12px"
                                    borderRadius="4px"
                                    marginBottom="20px"
                                >
                                </Text>
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button bgColor={"greyScale.grey6"} mr="4" onClick={onClose}>
                                Cancelar
                            </Button>
                            <Button type="submit" bgColor={"brand.brand3"} css={styleHover} color={"greyScale.grey10"} mr="4">
                                Editar Perfil
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}