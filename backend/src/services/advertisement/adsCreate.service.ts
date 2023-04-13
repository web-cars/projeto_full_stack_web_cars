import { AppError } from "../../errors/errors";
import AppDataSource from "../../data-source";
import { CarAds } from "../../entities/carAds.entity";
import { ICreateCarAdResponse } from "../../interfaces/carAds.interfaces";
import { Images } from "../../entities/images.entity";

const advertisementsCreateService = async ({
  brand,
  model,
  year,
  fuel_type,
  color,
  fipePrice,
  price,
  isActive,
  description,
  images,
}: ICreateCarAdResponse) => {
  if (
    !brand ||
    !model ||
    !year ||
    !fuel_type ||
    !color ||
    !fipePrice ||
    !price ||
    !isActive ||
    !description ||
    !images
  ) {
    throw new AppError(
      "Fields: brand, model, year, fuel_type, color, fipePrice, price, isActive, and description are necessary",
      400
    );
  }

  const advertisementRepository = AppDataSource.getRepository(CarAds);
  const imagesRepositry = AppDataSource.getRepository(Images);
  const newAdvertisement = advertisementRepository.create({
    brand,
    model,
    year,
    fuel_type,
    color,
    fipePrice,
    price,
    isActive,
    description,
  });

  const completeAdvertisement = await advertisementRepository.save(
    newAdvertisement
  );

  if (images.length > 0) {
    for (let i = 0; i < images.length; i++) {
      const newImages = { ...images[i], car: completeAdvertisement };
      await imagesRepositry.save(newImages);
    }
  }

  return completeAdvertisement;
};

export default advertisementsCreateService;
