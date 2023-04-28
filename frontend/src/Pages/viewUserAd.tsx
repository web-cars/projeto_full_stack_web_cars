import { Box, Container, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import AdPforfile from "../components/adProfile";
import Footer from "../components/Footer";
import { theme } from "../style/theme";
import { useContext } from "react";
import { CarAdsContext } from "../context/carAds.context";
import { ProductCard } from "../components/ProductCard";
import { iCarAdsInterface } from "../interfaces/carAds.interface";

const ViewUserAd = () => {
    const {carAds} = useContext(CarAdsContext)
    console.log(carAds)
    return ( 
        <>
        <Navbar/>
        <Box as="div" display="flex" flexDirection="column" minHeight="100vh" bg={theme.colors.greyScale.grey8}>
            <Box flex="1">
                <AdPforfile/>
            </Box>
            <Container maxW="80%">
                <Text fontWeight={'bold'}>Anúncios</Text>
                <Box display={'flex'} alignItems={'center'} justifyContent={"center"} p={5} gap={4}>
                {carAds?.advertisements.map((ad: iCarAdsInterface) => (
                <ProductCard key={ad.id}  id={ad.id} fipePrice={ad.fipePrice}  price={ad.price} isActive={ad.isActive} description={ad.description} brand={ad.brand} kilometers={ad.kilometers} images={ad.images} model={ad.model} year={ad.year} fuel_type={ad.fuel_type} user={ad.user} color={ad.color}/>
                 ))}
                </Box>
            </Container>
            <Footer/>
        </Box>
        </>
     );
}
 
export default ViewUserAd;