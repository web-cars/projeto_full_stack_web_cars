import {
  Flex,
  Box,
} from "@chakra-ui/react";
import Sidebar from "../components/Sidebar/index";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Banner from "../components/Banner";
import { ProductCard } from "../components/ProductCard";
import { useContext, useEffect } from "react";
import { CarAdsContext } from "../context/carAds.context";
import { iCarAdsInterface } from "../interfaces/carAds.interface";

export const Homepage = () => {
  const { carAds, getCarAds } = useContext(CarAdsContext);
  useEffect(() => {
    getCarAds(1);
  }, []);

  return (
    <Flex direction ='column' id="topo">
      <Box as='div' w='100v'><Navbar/></Box>
      <Box as='div'><Banner/></Box>
      <Flex direction='row' mt='5' mb='5'>
      <Box as='div'><Sidebar/></Box>
        <Box as='div' display='flex' flexWrap='wrap' gap='3' w='70%'>
        {carAds?.advertisements.map((ad: iCarAdsInterface) => (
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
              ></ProductCard>
            ))}
        </Box>
      </Flex>
      <Box as='div' ><Footer/></Box>
    </Flex>
  );
};
