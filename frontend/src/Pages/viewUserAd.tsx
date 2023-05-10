import { Box, Container, Text, useMediaQuery } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import AdPforfile from "../components/adProfile";
import Footer from "../components/Footer";
import { theme } from "../style/theme";
import { useContext } from "react";
import { CarAdsContext } from "../context/carAds.context";
import { ProductCard } from "../components/ProductCard";
import { iCarAdsInterface } from "../interfaces/carAds.interface";
import { useParams } from "react-router-dom";

const ViewUserAd = () => {
    const {id}: any = useParams()
    const {carAds} = useContext(CarAdsContext)
    const userAdespecific: any = carAds?.advertisements.filter(elem=> elem.user.id === id)
    const [isLargerThan1025] = useMediaQuery("(min-width: 1025px)");

    return ( 
        <>
        <Navbar/>
        <Box as="div" display="flex" flexDirection="column" minHeight="100vh" bg={theme.colors.greyScale.grey8}>
            <Box flex="1">
                <AdPforfile nameAd={userAdespecific[0].user.name} descriptionUserAd={userAdespecific[0].user.description}/>
            </Box>
            <Container maxW="80%">
                <Text fontWeight={'bold'} color={'black'}>Anúncios</Text>
                <Box display={'flex'} alignItems={'center'} justifyContent={"center"} p={5} gap={4}
                 flexWrap={isLargerThan1025 ? "wrap" : "nowrap"} overflow={isLargerThan1025 ? "": 'scroll'} >
                {userAdespecific.map((ad: iCarAdsInterface) => (
                   <ProductCard
                            key={ad.id}
                            id={ad.id}
                            fipePrice={ad.fipePrice}
                            price={ad.price}
                            isActive={ad.isActive}
                            description={ad.description}
                            brand={ad.brand}
                            kilometers={ad.kilometers}
                            images={ad.images}
                            model={ad.model}
                            year={ad.year}
                            fuel_type={ad.fuel_type}
                            user={ad.user}
                            color={ad.color}
                    />
                 ))}
           
                </Box>
            </Container>
            <Footer/>
        </Box>
        </>
     );
}
 
export default ViewUserAd;