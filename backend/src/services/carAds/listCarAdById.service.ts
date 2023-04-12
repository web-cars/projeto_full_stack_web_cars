import { Repository } from "typeorm";
import  AppDataSource  from "../../data-source";
import { CarAds } from "../../entities/carAds.entity";

const listCarAdByIdService = async(idCarAd: string): Promise<any> => {
    const carAdRepo: Repository<CarAds> = AppDataSource.getRepository(CarAds)
    const carAd = await carAdRepo.findOneBy({id:idCarAd})
    return carAd
}

export default listCarAdByIdService