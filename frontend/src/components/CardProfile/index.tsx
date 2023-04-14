
import { ICardProfile } from './../../interface/index';
import Mock from '../../mock/mock.json'

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

export const CardProfile = ({ image, name, description }: ICardProfile) => {

  //Dados vindo da API, serão utilizados as props do ICardProfile

  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}
      backgroundColor={"greyScale.grey10"}
      padding={"36px 44px"}
      borderRadius={"4px"}
      width={"30%"}
      zIndex={1}
    >
      <Card maxW='sm' bgColor={"transparent"} color={"greyScale.grey0"} boxShadow={"none"}>
        <CardBody display={'flex'} alignItems={'center'} flexDirection={'column'}>
          <Avatar name={'Thaisa Alice'} src='' />
          <Stack mt='6' spacing='3' >
            <Heading size='md'>{'Thaisa Alice'}</Heading>
            <Text>{'Lorem'}</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Button variant='solid' colorScheme='gray'>
            Ver todos os anuncios
          </Button>
        </CardFooter>
      </Card>
    </Box>
  )
}
