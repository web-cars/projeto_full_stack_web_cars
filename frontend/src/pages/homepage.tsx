import { Flex, UnorderedList, Wrap, Button, Text, Container } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar/index'
import { ProductCard } from '../components/ProductCard';
import { useContext } from 'react';
import { CarAdsContext } from '../context/carAds.context'
import { iCarAdsInterface } from '../interfaces/carAds.interface';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

export const Homepage = () => {
  const { carAds, getCarAds } = useContext(CarAdsContext)

  return (
    <Flex id='topo' direction="column" bg='greyScale.whiteFixed'>
      <Navbar />
      <Banner />
      <Flex w='100%' direction='row' bg='greyScale.whiteFixed' justify="space-between" wrap='wrap' p='20px'>
        <Sidebar />
        <UnorderedList w='67%' spacing={3} display='flex' flexDirection='row' flexWrap='wrap' gap="10px">
          {carAds?.ads.map((ad: iCarAdsInterface) => (
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
              iColor={ad.iColor}></ProductCard>))}
        </UnorderedList>
      </Flex>
      <Wrap display={"flex"} align='center' direction={"row"} bg='greyScale.whiteFixed' alignSelf={"center"}>
        {!carAds?.pagination.hasPreviousPage ? (<Container w={"97.73px"}></Container>) : (<Button onClick={() => getCarAds(carAds?.pagination.currentPage - 1)} color='brand.brand2'>Anterior</Button>)}
        <Text textAlign={"center"} h={"max-content"} fontSize='sm' color={"greyScale.grey2"}>{carAds?.pagination.currentPage} de {carAds?.pagination.totalPages} </Text>
        {!carAds?.pagination.hasNextPage ? (<Container w={"102.41px"}></Container>) : (<Button onClick={() => getCarAds(carAds?.pagination.currentPage + 1)} color='brand.brand2'>Seguinte</Button>)}
      </Wrap>
      <Footer />
    </Flex>
  )
};
