import AppDataSource from "../../data-source";
import { CarAds } from "../../entities/carAds.entity";
import { Images } from "../../entities/images.entity";

export const deleteCarAdService = async (id: string): Promise<void> => {
  const advertisementsRepository = AppDataSource.getRepository(CarAds);
  const imagesRepository = AppDataSource.getRepository(Images);

  const carAdvertisement = await advertisementsRepository.findOneBy({ id });
  const images = carAdvertisement.images;

  for (let i = 0; i < images.length; i++) {
    await imagesRepository.delete({ id: images[i].id });
  }
  await advertisementsRepository.delete({ id });
};
