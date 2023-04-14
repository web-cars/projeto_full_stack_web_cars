import { Request, Response } from "express";
import { updateCarAdService } from "../../services/advertisement/updateCarAd.service";
import listCarAdByIdService from "../../services/advertisement/listCarAdById.service";
import listAllCarAdsService from "../../services/advertisement/listAllCarAds.service";
import { deleteCarAdService } from "../../services/advertisement/deleteCarAd.service";
import createCarAdService from "../../services/advertisement/createCarAd.service";

const advertisementsCreateController = async (req: Request, res: Response) => {
  const newAdvertisement = await createCarAdService(req.body);
  return res.status(201).json(newAdvertisement);
};
const updateCarAdController = async (request: Request, response: Response) => {
  const data = await updateCarAdService(request.body, request.params.id);
  return response.status(200).json(data);
};
const getSpecificCarController = async (req: Request, res: Response) => {
  const data = await listCarAdByIdService(req.params.id);
  return res.status(200).json(data);
};

const listAllCarAdsController = async (req: Request, res: Response) => {
  const data = await listAllCarAdsService(+req.query.page || 1);
  return res.status(200).json(data);
};

const deleteCarAdController = async (req: Request, res: Response) => {
  await deleteCarAdService(req.params.id);
  return res.status(204).json();
};

export {
  advertisementsCreateController,
  listAllCarAdsController,
  getSpecificCarController,
  updateCarAdController,
  deleteCarAdController,
};
