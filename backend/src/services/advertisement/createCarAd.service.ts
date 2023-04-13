import AppDataSource from "../../data-source";
import { CarAds } from "../../entities/carAds.entity";
import { ICreateCarAdResponse } from "../../interfaces/carAds.interfaces";
import { Images } from "../../entities/images.entity";
import { AppError } from "../../errors/errors";

const createCarAdService = async ({
  images,
  ...data
}: ICreateCarAdResponse) => {
  if (!images) throw new AppError("Images are a required field.", 400);

  const advertisementRepository = AppDataSource.getRepository(CarAds);
  const imagesRepository = AppDataSource.getRepository(Images);

  const newAdvertisement = advertisementRepository.create({
    ...data,
  });

  const completeAdvertisement = await advertisementRepository.save(
    newAdvertisement
  );

  const outputImages = [];
  for (let i = 0; i < images.length; i++) {
    const newImage = await imagesRepository.save({
      ...images[i],
      car: completeAdvertisement,
    });
    outputImages.push({ ...images[i], id: newImage.id });
  }

  return {
    id: completeAdvertisement.id,
    ...completeAdvertisement,
    images: outputImages,
  };
};

export default createCarAdService;
