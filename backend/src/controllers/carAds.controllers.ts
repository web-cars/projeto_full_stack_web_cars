import { Request, Response } from "express";
import listCarAdService from "../services/carAds/listCarAd.service";


const listCarAdController = async (req: Request, res: Response): Promise<Response>=>{
    const announce = await listCarAdService()
    return res.json(announce)
}

export { listCarAdController }
import { updateCarAdService } from "../services/carAds/updateCarAd.service";

export const updateCarAdController = async (
  request: Request,
  response: Response
) => {
  const data = await updateCarAdService(request.body, request.params.id);
  return response.status(200).json(data);
};
