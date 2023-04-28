import { Box } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import AdPforfile from "../components/adProfile";
import Footer from "../components/Footer";
import { theme } from "../style/theme";

const ViewUserAd = () => {
    return ( 
        <>
        <Navbar/>
        <Box as="div" display="flex" flexDirection="column" minHeight="100vh" bg={theme.colors.greyScale.grey8}>
            <Box flex="1">
                <AdPforfile/>
            </Box>
            <Footer/>
        </Box>
        </>
     );
}
 
export default ViewUserAd;