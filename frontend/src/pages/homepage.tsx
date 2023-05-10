import {
  Flex,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import Sidebar from "../components/Sidebar/index";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Banner from "../components/Banner";
import { ProductCard } from "../components/ProductCard";
import { useContext, useEffect, useState } from "react";
import { CarAdsContext } from "../context/carAds.context";
import { ISelect, iCarAdsInterface } from "../interfaces/carAds.interface";

export const Homepage = () => {
  const [select,setSelect] = useState<ISelect>(selectDefaultValues) 
  const { carAds, getCarAds,filterCardAds } = useContext(CarAdsContext);
  const [isLargerThan1025] = useMediaQuery("(min-width: 1025px)");
  useEffect(() => {
    getCarAds(1);
    // filterCardAds(select)
  }, []);

  return (
    <Flex direction ='column' id="topo" bg='white'>
      <Box as='div' w='100v'><Navbar/></Box>
      <Box as='div'><Banner/></Box>
      <Flex direction='row' mt='5' mb='5'>
      <Box as='div'><Sidebar/></Box>
        <Box as='div' display='flex' flexWrap={isLargerThan1025 ? "wrap" : "nowrap"} overflow={isLargerThan1025 ? "": 'scroll'} 
         gap='3' w='100%' justifyContent='space-between' p='5'>
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
              />
            ))}
        </Box>
      </Flex>
      <Box as='div' ><Footer/></Box>
    </Flex>
  );
};
const selectDefaultValues = {
  color: '',
  model: '',
  brand: '',
  year: '',
  fuel_type: '',
  kilometers_min: 0,
  kilometers_max: 0,
  price_min: 0,
  price_max: 0,
};