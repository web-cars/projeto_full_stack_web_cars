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
    NumberInputField,
    NumberInput,
    Select,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { CarAdsContext } from "../../context/carAds.context";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ICarDataInterface } from "../../interfaces/carAds.interface";
import { z } from "zod";
import { TipoDeVeiculo, obterTipoDeVeiculo } from "../enum/fuel.enum";

const schemaImages = z.object({
    file: z.string(),
})


const schema = z.object({
    brand: z.string(),
    model: z.string(),
    year: z.string().transform((value) => Number(value)),
    fuel_type: z.string(),
    kilometers: z.string().transform((value) => Number(value)),
    color: z.string(),
    fipePrice: z.string().optional(),
    price: z.string().transform((value) => Number(value)),
    isActive: z.boolean().optional(),
    description: z.string(),
    images: z.array(schemaImages),
})


export const AddCarModal = () => {
    const { onSubmitCarAd, setBrand, setFuel, setModel, setYear, fipe } = useContext(CarAdsContext)
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

    const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
    const inputs = Array.from({ length: inputCount }).map((_, index) => (
        <FormControl mb="4">
            <FormLabel fontSize={"14px"}>{index + 1}ª Imagem da Galeria</FormLabel>
            <Input
                key={`${index}a33`}
                type="text"
                {...register(`images.${index + 1}.file`)}
                placeholder="https://image.com"
            />
        </FormControl>
    ));
    const brandList = [
        "Citroën", "Fiat", "Ford", "Chevrolet", "Honda", "Hyundai", "Nissan", "Peugeot", "Renault", "Toyota", "Volkswagen"
    ]
    const { isOpen, onOpen, onClose } = useDisclosure();
    const onSubmit = (data: any, e: any) => {
        data.fuel_type = obterTipoDeVeiculo(data.fuel_type);
        data.fipePrice = fipe?.value
        console.log(data)
    };
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
                                <Select {...register("brand")} onBlur={(e) => setBrand(e.target.value)} placeholder="Digite a marca do veículo" name="brand" >
                                    {brandList.map(elem => <option value={elem}>{elem}</option>)}
                                </Select>

                                <Text
                                    position="absolute"
                                    right="5px"
                                    color="feedback.alert1"
                                    fontSize="12px"
                                    borderRadius="4px"
                                    marginBottom="20px"
                                >
                                    {errors.brand?.message}
                                </Text>
                            </FormControl>
                            <FormControl mb="4">
                                <FormLabel fontSize={"14px"}>Modelo</FormLabel>
                                <Input  {...register("model")} onBlur={(e) => setModel(e.target.value)} placeholder="Digite o modelo do veículo" name="model" />
                                <Text
                                    position="absolute"
                                    right="5px"
                                    color="feedback.alert1"
                                    fontSize="12px"
                                    borderRadius="4px"
                                    marginBottom="20px"
                                >
                                    {errors.model?.message}
                                </Text>
                            </FormControl>
                            <Flex gap={"15px"}>
                                <FormControl mb="4">
                                    <FormLabel fontSize={"14px"}>Ano</FormLabel>
                                    <Select {...register("year")} onBlur={(e) => setYear(Number(e.target.value))} placeholder="Ano" name="year" >
                                        <option value={2022}>2022</option>
                                        <option value={2021}>2021</option>
                                        <option value={2020}>2020</option>
                                        <option value={2019}>2019</option>
                                    </Select>

                                    <Text
                                        position="absolute"
                                        right="5px"
                                        color="feedback.alert1"
                                        fontSize="12px"
                                        borderRadius="4px"
                                        marginBottom="20px"
                                    >
                                        {errors.year?.message}
                                    </Text>
                                </FormControl>
                                <FormControl mb="4">
                                    <FormLabel fontSize={"14px"}>Combustível</FormLabel>
                                    <Select {...register("fuel_type")} onBlur={(e) => setFuel(Number(e.target.value))} placeholder="Selecione Combustivel" name="fuel_type" >
                                        <option value={1}>Flex</option>
                                        <option value={2}>Híbrido</option>
                                        <option value={3}>Elétrico</option>
                                    </Select>
                                    <Text
                                        position="absolute"
                                        right="5px"
                                        color="feedback.alert1"
                                        fontSize="12px"
                                        borderRadius="4px"
                                        marginBottom="20px"
                                    >
                                        {errors.fuel_type?.message}
                                    </Text>
                                </FormControl>
                            </Flex>
                            <FormControl mb="4">
                                <FormLabel fontSize={"14px"}>Quilometragem</FormLabel>
                                <NumberInput>

                                    <NumberInputField {...register("kilometers")} placeholder="30.000" name="kilometers" />
                                </NumberInput>
                                <Text
                                    position="absolute"
                                    right="5px"
                                    color="feedback.alert1"
                                    fontSize="12px"
                                    borderRadius="4px"
                                    marginBottom="20px"
                                >
                                    {errors.kilometers?.message}
                                </Text>
                            </FormControl>
                            <FormControl mb="4">
                                <FormLabel fontSize={"14px"}>Cor</FormLabel>
                                <Input {...register("color")} placeholder="Branco" name="color" />
                                <Text
                                    position="absolute"
                                    right="5px"
                                    color="feedback.alert1"
                                    fontSize="12px"
                                    borderRadius="4px"
                                    marginBottom="20px"
                                >
                                    {errors.color?.message}
                                </Text>
                            </FormControl>
                            <Flex gap={"15px"}>
                                <FormControl mb="4">
                                    <FormLabel fontSize={"14px"}>Preço Tabela Fipe</FormLabel>

                                    <Input {...register("fipePrice")} disabled value={fipe?.value || 0} type="text" name="fipePrice" />

                                    <Text
                                        position="absolute"
                                        right="5px"
                                        color="feedback.alert1"
                                        fontSize="12px"
                                        borderRadius="4px"
                                        marginBottom="20px"
                                    >
                                        {errors.fipePrice?.message}
                                    </Text>
                                </FormControl>
                                <FormControl mb="4">
                                    <FormLabel fontSize={"14px"}>Preço</FormLabel>
                                    <NumberInput>

                                        <NumberInputField {...register("price")} min={0} placeholder="R$ 30.000" name="price" />
                                    </NumberInput>
                                    <Text
                                        position="absolute"
                                        right="5px"
                                        color="feedback.alert1"
                                        fontSize="12px"
                                        borderRadius="4px"
                                        marginBottom="20px"
                                    >
                                        {errors.price?.message}
                                    </Text>
                                </FormControl>

                            </Flex>
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
                                    {errors.description?.message}
                                </Text>
                            </FormControl>
                            <FormControl mb="4">
                                <FormLabel fontSize={"14px"}>Imagem de Capa</FormLabel>
                                <Input
                                    type="text"
                                    {...register("images.0.file")}
                                    placeholder="https://image.com"
                                />
                                <Text
                                    position="absolute"
                                    right="5px"
                                    color="feedback.alert1"
                                    fontSize="12px"
                                    borderRadius="4px"
                                    marginBottom="20px"
                                >
                                    {errors.images?.message}
                                </Text>
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
                            <Button type="submit" bgColor={"brand.brand3"} css={styleHover} color={"greyScale.grey10"} mr="4">
                                Criar Anuncio
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}