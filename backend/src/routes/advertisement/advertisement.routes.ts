import { Router } from "express";
import { verifyIfCarAdExistsMiddleware } from "../../middlewares/verifyIfCarAdExists.middleware";
import { validSerializerMiddleware } from "../../middlewares/validSerializer.middleware";
import {
  carAdCreateSerializer,
  carAdUpdateSerializer,
} from "../../serializers/carAds.serializers";
import {
  advertisementsCreateController,
  deleteCarAdController,
  getSpecificCarController,
  updateCarAdController,
} from "../../controllers/advertisement/advertisement.controller";
import { listAllCarAdsController } from "../../controllers/advertisement/advertisement.controller";

const advertisementRoutes = Router();

advertisementRoutes.post(
  "",
  validSerializerMiddleware(carAdCreateSerializer),
  advertisementsCreateController
);
advertisementRoutes.get("", listAllCarAdsController);

advertisementRoutes.patch(
  "/:id",
  verifyIfCarAdExistsMiddleware,
  validSerializerMiddleware(carAdUpdateSerializer),
  updateCarAdController
);

advertisementRoutes.get(
  "/:id",
  verifyIfCarAdExistsMiddleware,
  getSpecificCarController
);

advertisementRoutes.delete(
  "/:id",
  verifyIfCarAdExistsMiddleware,
  deleteCarAdController
);

export default advertisementRoutes;
