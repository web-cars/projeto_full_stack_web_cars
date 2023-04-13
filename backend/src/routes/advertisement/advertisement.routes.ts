import createAdversimentController from "../../controllers/advertisement/adsCreate.controller";
import { Router } from "express";
import findAdsCharacterVehiclesController from "../../controllers/advertisement/adsFindCharacterVehicles.controller";


const advertisementRoutes = Router();

advertisementRoutes.post(
  "", createAdversimentController
);

advertisementRoutes.get("/character/:vehicle_type",findAdsCharacterVehiclesController );

export default advertisementRoutes