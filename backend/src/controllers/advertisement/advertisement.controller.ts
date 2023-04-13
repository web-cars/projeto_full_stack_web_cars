import { Request, Response } from "express";
import advertisementsCreateService from "../../services/advertisement/adsCreate.service";
import { updateCarAdService } from "../../services/advertisement/updateCarAd.services";
import listCarAdByIdService from "../../services/advertisement/listCarAdById.service";
import listAllCarAdsService from "./../../services/advertisement/listAllCars.service";
import { deleteCarAdService } from "../../services/advertisement/deleteCarAd.service";

export const advertisementsCreateController = async (
  req: Request,
  res: Response
) => {
  try {
    const newAdvertisement = await advertisementsCreateService(req.body);

    return res.status(201).json(newAdvertisement);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(403).json({
        message: error.message,
      });
    }
  }
};
export const updateCarAdController = async (
  request: Request,
  response: Response
) => {
  const data = await updateCarAdService(request.body, request.params.id);
  return response.status(200).json(data);
};
export const getSpecificCarController = async (req: Request, res: Response) => {
  const data = await listCarAdByIdService(req.params.id);
  return res.status(200).json(data);
};

export const listAllCarAdsController = async (req: Request, res: Response) => {
  const data = await listAllCarAdsService();
  return res.status(200).json(data);
};

export const deleteCarAdController = async (req: Request, res: Response) => {
  await deleteCarAdService(req.params.id);
  return res.status(204).json();
};
