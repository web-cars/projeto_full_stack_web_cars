import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Badge,
  CardFooter,
  Button,
  Box,
  Text,
  LightMode
} from '@chakra-ui/react'
import { IInfoAd } from '../../interface'

export const InfoAd = ({ car, year, km, price }: IInfoAd) => {
  // Adicione o CAR no Heading, YEAR no primeiro badge, KM no segundo badge e PRICE no text.
  return (
    <Card width={{ base: '90%', md: '55%' }} zIndex={1} alignSelf='center' margin={'auto'} backgroundColor={"greyScale.grey10"} color={"greyScale.grey0"}>
      <CardHeader display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Heading size='md'> {car}</Heading>
      </CardHeader>
      <CardBody display={{ base: 'column', md: 'flex' }} justifyContent={'space-between'}>
        <Box margin={{ base: '0px 0px 40px 0', md: '' }}>
          <Badge fontSize={'md'} p='1.5' ml='1' bg={'brand.brand4'} color={'brand.brand1'}> {year} </Badge>
          <Badge fontSize={'md'} p='1.5' ml='1' bg={'brand.brand4'} color={'brand.brand1'}>  {km} KM </Badge>
        </Box>
        <Text fontWeight={'bold'}>
          R$ {price}
        </Text>
      </CardBody>
      <CardFooter>
        <LightMode>
          <Button colorScheme={'purple'}>Comprar</Button>
        </LightMode>
      </CardFooter>
    </Card>
  )
}
