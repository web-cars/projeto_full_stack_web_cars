import AppDataSource from "../../data-source";
import { CarAds } from "../../entities/carAds.entity";
import {
  ICarAdResponse,
  ICreateCarAdResponse,
} from "../../interfaces/carAds.interfaces";
import { Images } from "../../entities/images.entity";
import { Users } from "../../entities/users.entity";

const createCarAdService = async (
  { images, ...data }: ICreateCarAdResponse,
  userId: string
): Promise<ICarAdResponse> => {
  const advertisementRepository = AppDataSource.getRepository(CarAds);
  const usersRepository = AppDataSource.getRepository(Users);
  const imagesRepository = AppDataSource.getRepository(Images);

  const user = await usersRepository.findOneBy({ id: userId });

  const newAdvertisement = advertisementRepository.create({
    ...data,
    user,
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

  const {
    user: userInAd,
    images: imagesInAd,
    ...returnedAdvertisement
  } = completeAdvertisement;

  return {
    advertisement: {
      id: returnedAdvertisement.id,
      ...returnedAdvertisement,
      images: outputImages,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        address: {
          ...user.address,
        },
      },
    },
  };
};

export default createCarAdService;
