
import { ICardProfile, IUserReturn } from './../../interface/index';
import {
  Card,
  CardBody,
  Avatar,
  Stack,
  Heading,
  Text,
  CardFooter,
  Button,
  Box
} from '@chakra-ui/react'
import { css } from '@emotion/react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CarAdsContext } from '../../context/carAds.context';

export const CardProfile = ({ image, name, description }: ICardProfile) => {
  const {id} = useParams()
  const navigate = useNavigate()
  const divMobile = css`
  @media (max-width:1024px) {
    width: 100%;
    padding: 15px
  }
  `
  //Dados vindo da API, serão utilizados as props do ICardProfile
  const {carAds} = useContext(CarAdsContext)
  const userAdespecific:IUserReturn = carAds?.advertisements.find(elem=> elem.id == id)
  
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}
      backgroundColor={"greyScale.grey10"}
      padding={"36px 44px"}
      borderRadius={"4px"}
      width={"30%"}
      zIndex={1}
      css={divMobile}
    >
      <Card maxW='sm' bgColor={"transparent"} color={"greyScale.grey0"} boxShadow={"none"}>
        <CardBody display={'flex'} alignItems={'center'} flexDirection={'column'}>
          <Avatar name={'test name'} src='' />
          <Stack mt='6' spacing='3' >
            <Heading size='md'>{userAdespecific.user.name}</Heading>
            <Text>{userAdespecific.description}</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Button variant='solid' bgColor={"greyScale.grey0"} color={"greyScale.grey10"} onClick={()=> navigate(`/userAdInfo/${userAdespecific.user.id}`)} >
            Ver todos os anuncios
          </Button>
        </CardFooter>
      </Card>
    </Box>
  )
}

