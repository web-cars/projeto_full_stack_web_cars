import { AppDataSource } from "../../data-source";
import { CarAds } from "../../entities/carAds.entity";
import { ICarAdUpdateRequest } from "../../interfaces/carAds.interfaces";

export const updateCarAdService = async (
  payload: ICarAdUpdateRequest,
  id: string
) => {
  const carAdRepository = AppDataSource.getRepository(CarAds);

  const carAd = await carAdRepository.findOneBy({ id });

  const updatedCarAd = {
    ...carAd,
    ...payload,
  };

  await carAdRepository.save(updatedCarAd);
  return updatedCarAd;
};
