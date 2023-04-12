import AppDataSource from "../../data-source";
import { CarAds } from "../../entities/carAds.entity";
import { Images } from "../../entities/images.entity";

export const deleteCarAdService = async (id: string): Promise<void> => {
  const carAdRepository = AppDataSource.getRepository(CarAds);
  const imagesRepository = AppDataSource.getRepository(Images);

  const carAdvertisement = await carAdRepository.findOneBy({ id });

  await imagesRepository.delete({ car: carAdvertisement });
  await carAdRepository.delete({ id });
};
