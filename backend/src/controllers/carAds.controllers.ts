import { Request, Response } from "express";
import listCarAdService from "../services/carAds/listCarAd.service";


const listCarAdController = async (req: Request, res: Response): Promise<Response>=>{
    const announce = await listCarAdService()
    return res.json(announce)
}

export { listCarAdController }