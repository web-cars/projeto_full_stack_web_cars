import { Repository } from "typeorm";
import  AppDataSource  from "../../data-source";
import { CarAds } from "../../entities/carAds.entity";

const listCarAdService = async(): Promise<any>=>{
    const carAdsRepo: Repository<CarAds> = AppDataSource.getRepository(CarAds)
    const carAds = await carAdsRepo.find()
    return carAds

}

export default listCarAdService