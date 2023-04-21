import AppDataSource from "../../data-source";
import { CarAds } from "../../entities/carAds.entity";
import { ICarAdResponse } from "../../interfaces/carAds.interfaces";

const listCarAdByIdService = async (adId: string): Promise<ICarAdResponse> => {
  const advertisementsRepository = AppDataSource.getRepository(CarAds);

  const advertisement = await advertisementsRepository
    .createQueryBuilder("car_ads")
    .innerJoinAndSelect("car_ads.user", "user")
    .innerJoinAndSelect("car_ads.images", "images")
    .innerJoinAndSelect("user.address", "address")
    .where("car_ads.id = :id", { id: adId })
    .getOne();

  const { user, images, id, ...returnedAdvertisement } = advertisement;

  return {
    advertisement: {
      id,
      ...returnedAdvertisement,
      fipePrice: +returnedAdvertisement.fipePrice,
      price: +returnedAdvertisement.price,
      images,
    },
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      address: {
        ...user.address,
      },
    },
  };
};

export default listCarAdByIdService;
