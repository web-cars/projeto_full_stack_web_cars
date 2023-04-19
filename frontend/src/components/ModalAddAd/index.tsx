import { useContext, useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    FormControl,
    FormLabel,
    Input,
    Button,
    Textarea,
    useDisclosure,
    Flex,
    Text,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { CarAdsContext } from "../../context/carAds.context";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ICarDataInterface } from "../../interfaces/carAds.interface";
import { z } from "zod";

const schemaImages = z.object({
    file: z.string(),
})
const schema = z.object({
    fipePrice: z.number(),
    price: z.number(),
    isActive: z.boolean(),
    description: z.string(),
    brand: z.string(),
    kilometers: z.number(),
    images: z.array(schemaImages),
    model: z.string(),
    year: z.number(),
    fuel_type: z.number(),
    iColor: z.string(),
})


export const AddCarModal = () => {
    const { carData, setCarData, onSubmitCarAd, setBrand, setFuel, setModel, setYear, fipe } = useContext(CarAdsContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICarDataInterface>({
        resolver: zodResolver(schema),
    });
    const [inputCount, setInputCount] = useState(0)
    const handleInputCount = () => {
        if (inputCount < 6) setInputCount((prevCount) => prevCount + 1)
    }
    const styleHover = css`
    &:hover{
        background-color: var(--chakra-colors-brand-brand1);
    }
    `
    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setCarData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleImageChange = (event: any) => {
        const images = [...event.target.files];
        setCarData((prevData) => ({ ...prevData, images: images }));
    };

    const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
    const inputs = Array.from({ length: inputCount }).map((_, index) => (
        <FormControl mb="4">
            <FormLabel fontSize={"14px"}>{index + 1}ª Imagem da Galeria</FormLabel>
            <Input
                key={index}
                type="text"
                // {...register("images"), { onChange: (e) => (handleImageChange(e)) }}
                {...register("images")}
                onChange={(e) => handleImageChange(e)}
                name="images"
                placeholder="https://image.com"
            />
        </FormControl>
    ));
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen}>Abrir modal</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontSize={"16px"} color={"greyScale.grey-1"}>Criar Anúncio

                        <Text fontSize={"14px"}>Informações do veículo</Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={
                        handleSubmit(onSubmitCarAd)
                    }>
                        <ModalBody>
                            <FormControl mb="4">
                                <FormLabel fontSize={"14px"}>Marca</FormLabel>
                                <Input {...register("brand")} onChange={(e) => setBrand(e.target.value)} placeholder="Digite a marca do veículo" name="brand" />
                            </FormControl>
                            <FormControl mb="4">
                                <FormLabel fontSize={"14px"}>Modelo</FormLabel>
                                <Input  {...register("model")} onChange={(e) => setModel(e.target.value)} placeholder="Digite o modelo do veículo" name="model" />
                            </FormControl>
                            <Flex gap={"15px"}>

                                <FormControl mb="4">
                                    <FormLabel fontSize={"14px"}>Ano</FormLabel>
                                    <Input {...register("year")} onChange={(e) => setYear(Number(e.target.value))} placeholder="Ano" name="year" />
                                </FormControl>
                                <FormControl mb="4">
                                    <FormLabel fontSize={"14px"}>Combustível</FormLabel>
                                    <Input  {...register("fuel_type")} onChange={(e) => setFuel(+e.target.value)} placeholder="Gasolina/Etanol" name="fuel_type" />
                                </FormControl>
                            </Flex>
                            <FormControl mb="4">
                                <FormLabel fontSize={"14px"}>Quilometragem</FormLabel>
                                <Input {...register("kilometers")} onChange={(e) => handleInputChange(e)} placeholder="30.000" name="kilometers" />
                            </FormControl>
                            <FormControl mb="4">
                                <FormLabel fontSize={"14px"}>Cor</FormLabel>
                                <Input {...register("color")} onChange={(e) => handleInputChange(e)} placeholder="Branco" name="color" />
                            </FormControl>
                            <Flex gap={"15px"}>
                                <FormControl mb="4">
                                    <FormLabel fontSize={"14px"}>Preço Tabela Fipe</FormLabel>
                                    <Input {...register("fipePrice")} onChange={(e) => handleInputChange(e)} value={fipe?.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} type="text" name="fipePrice" />
                                </FormControl>
                                <FormControl mb="4">
                                    <FormLabel fontSize={"14px"}>Preço</FormLabel>
                                    <Input {...register("price")} onChange={(e) => handleInputChange(e)} placeholder="R$ 30.000" type="number" min={"0"} name="price" />
                                </FormControl>

                            </Flex>
                            <FormControl mb="4">
                                <FormLabel fontSize={"14px"}>Descrição</FormLabel>
                                <Textarea {...register("description")} onChange={(e) => handleInputChange(e)} placeholder={lorem} name="description" />
                            </FormControl>
                            <FormControl mb="4">
                                <FormLabel fontSize={"14px"}>Imagem de Capa</FormLabel>
                                <Input
                                    type="text"
                                    {...register("images")}
                                    onChange={(e) => handleImageChange(e)}
                                    name="images"
                                    placeholder="https://image.com"
                                />
                            </FormControl>
                            {
                                inputs
                            }

                            {
                                inputCount < 6 ?
                                    (<Button fontSize={"14px"} onClick={handleInputCount} bgColor={"brand.brand4"} color={"brand.brand1"}>Adicionar campo para imagem da galeria</Button>) : <></>

                            }
                        </ModalBody>
                        <ModalFooter>
                            <Button bgColor={"greyScale.grey6"} mr="4" onClick={onClose}>
                                Cancelar
                            </Button>
                            <Button bgColor={"brand.brand3"} css={styleHover} color={"greyScale.grey10"} mr="4">
                                Criar Anuncio
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}