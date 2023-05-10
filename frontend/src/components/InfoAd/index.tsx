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
  LightMode,
  Link
} from '@chakra-ui/react'
import { IInfoAd } from '../../interface'
import { css } from '@emotion/react'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'

export const InfoAd = ({ car, year, km, price, cellPhone }: IInfoAd) => {
  // Adicione o CAR no Heading, YEAR no primeiro badge, KM no segundo badge e PRICE no text.
  const divMobile = css`
  @media (max-width:1024px) {
     width: 100%;
    
  }
  `
  const {user} = useContext(UserContext)
  return (
    <Card css={divMobile} width={{ base: '90%', md: '60%' }} zIndex={1} alignSelf='center' margin={'auto'} backgroundColor={"greyScale.grey10"} color={"greyScale.grey0"}>
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
          <Link href={`https://wa.me/+${cellPhone}?text=Óla, gostaria de conversar sobre o seu veículo`} colorScheme={'purple'}  target="_blank" > Comprar</Link>
        </LightMode>
      </CardFooter>
    </Card>
  )
}
