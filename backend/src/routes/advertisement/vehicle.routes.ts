import { Router } from "express";
import { verifyIfCarAdExistsMiddleware } from "../../middlewares/verifyIfCarAdExists.middleware";
import { validSerializerMiddleware } from "../../middlewares/validSerializer.middleware";
import { carAdUpdateSerializer } from "../../serializers/carAds.serializers";
import {
  advertisementsCreateController,
  deleteCarAdController,
  getSpecificCarController,
  updateCarAdController,
} from "../../controllers/advertisement/advertisement.controller";
import { listAllCarAdsController } from "./../../controllers/advertisement/advertisement.controller";

const advertisementRoutes = Router();

advertisementRoutes.post("", advertisementsCreateController);

advertisementRoutes.patch(
  "/:id",
  verifyIfCarAdExistsMiddleware,
  validSerializerMiddleware(carAdUpdateSerializer),
  updateCarAdController
);

advertisementRoutes.get("/:id", getSpecificCarController);

advertisementRoutes.get("", listAllCarAdsController);

advertisementRoutes.delete(
  "/:id",
  verifyIfCarAdExistsMiddleware,
  deleteCarAdController
);

export default advertisementRoutes;
