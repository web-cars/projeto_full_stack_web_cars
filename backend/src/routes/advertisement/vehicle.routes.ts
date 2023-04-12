import advertisementsCreateController from "../../controllers/advertisement/advertisement.controller";
import { Router } from "express";


const advertisementRoutes = Router();

advertisementRoutes.post(
  "", advertisementsCreateController
);

advertisementRoutes.get("", );

export default advertisementRoutes