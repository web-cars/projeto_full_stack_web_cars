import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { CarAds } from "../../entities/carAds.entity";
import { ICarAdResponse } from "../../interfaces/carAds.interfaces";

const listAllCarAdsService = async (): Promise<ICarAdResponse[]> => {
  const carAdRepo: Repository<CarAds> = AppDataSource.getRepository(CarAds);
  const carAds = await carAdRepo.find();
  return carAds;
};

export default listAllCarAdsService;
