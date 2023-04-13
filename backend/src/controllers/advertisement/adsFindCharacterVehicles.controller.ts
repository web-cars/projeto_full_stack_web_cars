import { Request, Response } from "express";
import findCharacterVehiclesService from "../../services/adsFindCharacterVehicles.service";


const findAdsCharacterVehiclesController = async (req: Request, res: Response) => {
    try {
      const vehicle_type = req.params.vehicle_type
      const adversitements = await findCharacterVehiclesService(vehicle_type)

      return res.status(200).json(adversitements);

    } catch (error) {
        if(error instanceof Error){
              return res.status(403).json({
                message: error.message
            })
        }
    }

}

export default findAdsCharacterVehiclesController