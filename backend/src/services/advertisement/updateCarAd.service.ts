import AppDataSource from "../../data-source";
import { CarAds } from "../../entities/carAds.entity";
import { Images } from "../../entities/images.entity";
import { ICarAdUpdateResponse } from "../../interfaces/carAds.interfaces";
import { ICarAdUpdateRequest } from "../../interfaces/carAds.interfaces";

export const updateCarAdService = async (
  { images: imagesInRequest, ...data }: ICarAdUpdateRequest,
  id: string
): Promise<ICarAdUpdateResponse> => {
  const carAdRepository = AppDataSource.getRepository(CarAds);
  const imagesRepository = AppDataSource.getRepository(Images);

  const carAd = await carAdRepository.findOneBy({ id });

  if (imagesInRequest) {
    const images = carAd.images;

    for (let i = 0; i < images.length; i++) {
      await imagesRepository.delete({ id: images[i].id });
    }

    for (let i = 0; i < imagesInRequest.length; i++) {
      carAd.images[i] = imagesInRequest[i];

      const newImage = await imagesRepository.save({
        ...carAd.images[i],
        car: carAd,
      });

      carAd.images[i].id = newImage.id;
    }
  }

  const updatedCarAd = carAdRepository.create({
    ...carAd,
    ...data,
  });

  await carAdRepository.save(updatedCarAd);

  return {
    ...updatedCarAd,
    price: +updatedCarAd.price,
    fipePrice: +updatedCarAd.fipePrice,
  };
};
