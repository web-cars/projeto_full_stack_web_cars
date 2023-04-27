import { Request, Response } from "express";
import updateAdressService from "../../services/adress/updateAdress.service";

const updateAdressController = async (req: Request, res: Response): Promise<Response> => {
    const adressData = req.body
    const idAdress = req.params.id
    const updateAdress = await updateAdressService(adressData, idAdress)
    return  res.json(updateAdress)
};

export { updateAdressController }