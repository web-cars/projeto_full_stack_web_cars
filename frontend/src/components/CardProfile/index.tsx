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
  Box,
  DarkMode
} from '@chakra-ui/react'


export const CardProfile = () => {

  const user = Mock.mockUsers[0]
  const { name, description, image } = user

  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
      <Card width={{base: '90%', md: '30%'}} h={{base: '20em', md: '18em'}}>
        <CardBody display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
          <Avatar name={name} src={image} />
          <Stack mt='6' spacing='3' display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
            <Heading size='md'>{name}</Heading>
            <Text textAlign={'center'}>{description}</Text>
          </Stack>
        </CardBody>
        <CardFooter display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <Button variant='solid' bg={'greyScale.blackFixed'} color={'white'}>
            Ver todos os anuncios
          </Button>
        </CardFooter>
      </Card>
    </Box>
  )
}