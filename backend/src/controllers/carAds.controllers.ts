import { Request, Response } from "express";
import listCarAdService from "../services/carAds/listCarAd.service";
import { updateCarAdService } from "../services/carAds/updateCarAd.service";


export const listCarAdController = async (req: Request, res: Response): Promise<Response>=>{
    const carAds = await listCarAdService()
    return res.json(carAds)
}

export const updateCarAdController = async (request: Request, response: Response) => {
  const data = await updateCarAdService(request.body, request.params.id);
  return response.status(200).json(data);
};
