import { Request, Response } from "express";
import { updateCarAdService } from "../services/carAds/updateCarAd.service";
import listCarAdByIdService from "../services/carAds/listCarAdById.service";


export const listCarAdByIdController = async (req: Request, res: Response): Promise<Response>=>{
    const idCarAds = req.params.id
    const carAds = await listCarAdByIdService(idCarAds)
    return res.json(carAds)
}

export const updateCarAdController = async (request: Request, response: Response) => {
  const data = await updateCarAdService(request.body, request.params.id);
  return response.status(200).json(data);
};
