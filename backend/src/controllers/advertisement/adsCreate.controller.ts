import { Request, Response } from "express";
import advertisementsCreateService from "../../services/advertisement/adsCreate.service";
import { instanceToPlain } from "class-transformer";


const advertisementsCreateController = async (req: Request, res: Response) => {
    const {
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
} = req.body;

try {
    const newAdvertisement = await advertisementsCreateService({
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

    return res.status(201).json(instanceToPlain(newAdvertisement));
} catch (error) {
  if (error instanceof Error) {
    return res.status(403).json({
      message: error.message,
    });
  }
}
};

export default advertisementsCreateController;