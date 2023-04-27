import AppDataSource from "../../data-source";
import { CarAds } from "../../entities/carAds.entity";
import { ICarAdResponse } from "../../interfaces/carAds.interfaces";

const listCarAdByIdService = async (adId: string): Promise<ICarAdResponse> => {
  const advertisementsRepository = AppDataSource.getRepository(CarAds);

  const advertisement = await advertisementsRepository.findOne({
    where: { id: adId },
    relations: {
      user: true,
    },
  });

  const { user, images, id, ...returnedAdvertisement } = advertisement;

  return {
    advertisement: {
      id,
      ...returnedAdvertisement,
      fipePrice: +returnedAdvertisement.fipePrice,
      price: +returnedAdvertisement.price,
      images,
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

export default listCarAdByIdService;
