import AppDataSource from "../../data-source";
import { CarAds } from "../../entities/carAds.entity";
import { Images } from "../../entities/images.entity";

export const deleteCarAdService = async (id: string): Promise<void> => {
  const advertisementsRepository = AppDataSource.getRepository(CarAds);
  const imagesRepository = AppDataSource.getRepository(Images);

  const carAdvertisement = await advertisementsRepository.findOneBy({ id });

  await imagesRepository.delete({ car: carAdvertisement });
  await advertisementsRepository.delete({ id });
};
