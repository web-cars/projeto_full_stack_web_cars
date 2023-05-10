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
    InputGroup,
    InputLeftAddon,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { theme } from "../../style/theme";
import { CarAdsContext } from "../../context/carAds.context";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ICarDataInterface } from "../../interfaces/carAds.interface";
import { z } from "zod";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const schemaImages = z.object({
    file: z.string(),
})


const schema = z.object({
    brand: z.string(),
    model: z.string(),
    year: z.string().optional().transform((value) => Number(value)),
    fuel_type: z.string().optional(),
    kilometers: z.string().transform((value) => Number(value)),
    color: z.string(),
    fipePrice: z.string().optional(),
    price: z.string().transform((value) => Number(value)),
    isActive: z.boolean().optional(),
    description: z.string(),
    images: z.array(schemaImages),
})


export const EditAds = ({id}: any) => {
    const { onSubmitEditCarAd, setBrand, setFuel, setModel, setYear, fipe, options, setFipeCar, fipeCar } = useContext(CarAdsContext)
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
    const styleFocus = css`
    &:focus-within{
        border: 2px solid rgba(66,153,225,0.6);
    }
    `
    const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
    const inputs = Array.from({ length: inputCount }).map((_, index) => (
        <FormControl mb="4">
            <FormLabel fontSize={"14px"}>{index + 1}ª Imagem da Galeria</FormLabel>
            <Input
                key={`${index}im`}
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
    const filterModel = (value: string) => {
        const filteredCar = options?.find(elem => elem.name === value)
        setFipeCar(filteredCar)
        setYear(Number(filteredCar?.year))
        setFuel(filteredCar?.fuel)
    }

    const [btnActive, setBtnActive] = useState("sim");
    const handleButtonClick = (button: React.SetStateAction<string>) => {
      setBtnActive(button);
    };

    return (
        <>
            <Button onClick={onOpen} fontSize={12}
                w={120}
                h={10}
                border={"2px"}
                color={"brand.brand1"}
                cursor={"pointer"}
                borderColor={"brand.brand1"}
                bg={'transparent'}>Editar</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontSize={"16px"} color={"greyScale.grey-1"}>Editar Anúncio

                        <Text fontSize={"14px"} mt='4'>Informações do veículo {id}</Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={
                        handleSubmit(onSubmitEditCarAd)

                    }>
                        <ModalBody>
                            <FormControl mb="4">
                                <FormLabel fontSize={"14px"}>Marca</FormLabel>
                                <Select {...register("brand")} onChange={(e) => setBrand(e.target.value.toLowerCase())} placeholder="Digite a marca do veículo" name="brand" >
                                    {brandList.map((elem, index) => <option key={index + "b"} value={elem}>{elem}</option>)}
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
                                <Select {...register("model")} onChange={(e) => {
                                    filterModel(e.target.value)
                                    setModel(e.target.value)
                                }} placeholder="Digite a marca do veículo" name="brand" >
                                    {options?.map((elem, index) => <option key={index + "m"} value={elem?.name}>{elem?.name}</option>)}
                                </Select>
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
                                    <Input _placeholder={{ color: "greyScale.grey10" }} _disabled={{ opacity: "1" }} {...register("year")} disabled value={fipeCar?.year || "Ano"} type="text" name="year" />
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
                                    <Select {...register("fuel_type")} onChange={(e) => setFuel(Number(e.target.value))} placeholder="Selecione Combustivel" name="fuel_type" >
                                        <option value={fipeCar?.fuel}>{fipeCar?.fuel === 1 ? "Flex" : fipeCar?.fuel === 2 ? "Híbrido" : "Elétrico"}</option>

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

                                    <Input {...register("fipePrice")} disabled value={fipe?.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) || 0} type="text" name="fipePrice" />

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
                                        <InputGroup css={styleFocus} className="groupInput" border={"1px solid"} borderRadius={"0.375rem"} borderColor={"inherit"}>
                                            <InputLeftAddon border={"none"} bgColor={"transparent"} children="R$" />
                                            <NumberInputField _focus={{ outline: "none", boxShadow: "none" }} border={"none"} {...register("price")} min={0} placeholder="30.000" name="price" />
                                        </InputGroup>
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
                            <Text>Publicado</Text>
                            <Flex justifyContent="space-around" alignItems="center" mt={4} mb={4}>
                                <Button
                                w='40%'
                                bg={btnActive === "Sim" ? theme.colors.brand.brand1 : theme.colors.greyScale.whiteFixed}
                                color={btnActive === "Sim" ? theme.colors.greyScale.whiteFixed : theme.colors.greyScale.blackFixed}
                                border={btnActive === "Sim" ? "none" : "solid"}
                                borderWidth={btnActive === "Sim" ? "none" : "1px"}
                                onClick={() => handleButtonClick("Sim")}>
                                Sim
                                </Button>
                                <Button
                                 w='40%'
                                bg={btnActive === "Não" ? theme.colors.brand.brand1 : theme.colors.greyScale.whiteFixed}
                                color={btnActive === "Não" ? theme.colors.greyScale.whiteFixed : theme.colors.greyScale.blackFixed}
                                border={btnActive === "Não" ? "none" : "solid"}
                                borderWidth={btnActive === "Não" ? "none" : "1px"}
                                onClick={() => handleButtonClick("Não")}>
                                Não
                                </Button>
                            </Flex>
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
                            <Button type="submit" bgColor={"brand.brand3"} css={styleHover} color={"greyScale.grey10"} mr="4" id={id}>
                                Editar Anuncio 
                            </Button>
                            <ToastContainer />
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}