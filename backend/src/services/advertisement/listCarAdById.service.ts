import AppDataSource from "../../data-source";
import { CarAds } from "../../entities/carAds.entity";
import { ICarAdResponse } from "../../interfaces/carAds.interfaces";

const listCarAdByIdService = async (adId: string): Promise<ICarAdResponse> => {
  const advertisementsRepository = AppDataSource.getRepository(CarAds);
  const { price, fipePrice, id, ...advertisement } =
    await advertisementsRepository.findOneBy({ id: adId });
  return { id, price: +price, fipePrice: +fipePrice, ...advertisement };
};

export default listCarAdByIdService;
