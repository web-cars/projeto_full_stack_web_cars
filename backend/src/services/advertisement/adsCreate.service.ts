import { IAdvertisementRequest } from "../../interfaces/advertisement";
import { AppError } from "../../errors/errors";
import { DataSource } from "typeorm";
import { Advertisements } from "../../entities/adversitements.entity";
import { AppDataSource } from "../../data-source";


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
    vehicle_type,
    images
}: IAdvertisementRequest) => {
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
        !vehicle_type ||
        !images 
    ) {
        throw new AppError(
            "Fields: brand, model, year, fuel_type, color, fipePrice, price, isActive, description, and vehicle_type are necessary",
            400
          );
    }

    if (vehicle_type !== "car" && vehicle_type !== "motorcycle") {
        throw new AppError(
          "Type veihcle: Only car or motorcycle are accepted.",
          400
        );
    }

    const advertisementRepository = AppDataSource.getRepository(Advertisements);

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
        vehicle_type,
        images
      });
    
      const completeAdvertisement = await advertisementRepository.save(
        newAdvertisement
      );
    
      return completeAdvertisement;
};

export default advertisementsCreateService;