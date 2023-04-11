import { Request, Response } from "express";
import { updateCarAdService } from "../services/carAds/updateCarAd.service";

export const updateCarAdController = async (
  request: Request,
  response: Response
) => {
  const data = await updateCarAdService(request.body, request.params.id);
  return response.status(200).json(data);
};
