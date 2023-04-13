import AppDataSource from "../../data-source";
import { CarAds } from "../../entities/carAds.entity";
import { ICarAdResponse } from "../../interfaces/carAds.interfaces";

const listAllCarAdsService = async (): Promise<ICarAdResponse[]> => {
  const advertisementsRepository = AppDataSource.getRepository(CarAds);
  const advertisements = await advertisementsRepository.find();

  return advertisements.map(({ id, price, fipePrice, ...data }) => {
    return { id, price: +price, fipePrice: +price, ...data };
  });
};

export default listAllCarAdsService;
