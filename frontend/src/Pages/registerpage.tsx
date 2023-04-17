import { Flex } from '@chakra-ui/react'
import RegisterUser from '../components/RegisterUser';
import Footer from '../components/Footer';
import { Navbar } from '../components/Navbar';



export const Registerpage = () => {

    return (
    <Flex id='topo' direction="column" bg='greyScale.whiteFixed'>
        <Navbar/>
            <Flex w='100%' direction='column' bg='#F1F3F5'>
                <RegisterUser/>
            </Flex>        
        <Footer />
    </Flex>
    
)
};

