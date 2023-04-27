import {
  Flex,
  UnorderedList,
  Wrap,
  Button,
  Text,
  Container,
} from "@chakra-ui/react";
import Sidebar from "../components/Sidebar/index";
import { ProductCard } from "../components/ProductCard";
import { useContext, useEffect, useState } from "react";
import { CarAdsContext } from "../context/carAds.context";
import { iCarAdsInterface } from "../interfaces/carAds.interface";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Banner from "../components/Banner";
import { css } from "@emotion/react";

export const Homepage = () => {
  const { carAds, getCarAds } = useContext(CarAdsContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const mobile = css`
    @media (max-width: 1024px) {
      width: 100%;
      flex-wrap: nowrap;
      overflow-x: auto;
      justify-content: flex-start;
    }
  `;
  const mobilePage = css`
    @media (max-width: 1024px) {
      height: 100vh;
    }
  `;

  useEffect(() => {
    getCarAds(1);
  }, []);

  return (
    <Flex
      css={mobilePage}
      id="topo"
      direction="column"
      bg="greyScale.whiteFixed"
      h={"100%"}
      justify={"space-between"}
    >
      <Navbar />
      <Banner />
      <Flex
        w="100%"
        direction="row"
        bg="greyScale.whiteFixed"
        justify="space-between"
        wrap="wrap"
        p="20px"
      >
        <Sidebar />
        <UnorderedList
          css={mobile}
          w="66%"
          spacing={3}
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          gap="10px"
          ml={"0"}
          alignItems={"flex-end"}
        >
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
        </UnorderedList>
      </Flex>
      <Wrap
        display={"flex"}
        align="center"
        direction={"row"}
        bg="greyScale.whiteFixed"
        alignSelf={"center"}
      >
        {!carAds?.pagination.hasPreviousPage ? (
          <Container w={"97.73px"}></Container>
        ) : (
          <Button
            onClick={() => getCarAds(carAds?.pagination.currentPage - 1)}
            color="brand.brand2"
          >
            Anterior
          </Button>
        )}
        <Text
          textAlign={"center"}
          h={"max-content"}
          fontSize="sm"
          color={"greyScale.grey2"}
        >
          {carAds?.pagination.currentPage} de {carAds?.pagination.totalPages}{" "}
        </Text>
        {!carAds?.pagination.hasNextPage ? (
          <Container w={"102.41px"}></Container>
        ) : (
          <Button
            onClick={() => getCarAds(carAds?.pagination.currentPage + 1)}
            color="brand.brand2"
          >
            Seguinte
          </Button>
        )}
      </Wrap>
      <Footer />
    </Flex>
  );
};
