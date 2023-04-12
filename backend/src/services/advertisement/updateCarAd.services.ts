import AppDataSource from "../../data-source";
import { CarAds } from "../../entities/carAds.entity";
import { Images } from "../../entities/images.entity";
import { ICarAdResponse } from "../../interfaces/carAds.interfaces";
import { ICarAdUpdateRequest } from "../../interfaces/carAds.interfaces";

export const updateCarAdService = async (
  payload: ICarAdUpdateRequest,
  id: string
): Promise<ICarAdResponse> => {
  const carAdRepository = AppDataSource.getRepository(CarAds);
  const imagesRepository = AppDataSource.getRepository(Images);

  const carAd = await carAdRepository.findOneBy({ id });

  const { images: imagesInRequest, ...data } = payload;

  if (imagesInRequest) {
    imagesRepository.delete({ car: carAd });
    //sempre vai apagar e adicionar de acordo com o body da requisição

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
  return updatedCarAd;
};
