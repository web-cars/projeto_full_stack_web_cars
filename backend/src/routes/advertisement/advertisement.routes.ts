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
  selectCarAdsController,
  updateCarAdController,
} from "../../controllers/advertisement/advertisement.controller";
import { listAllCarAdsController } from "../../controllers/advertisement/advertisement.controller";
import { verifyTokenMiddleware } from "../../middlewares/verifyToken.middleware";
import { isAdvertisementOwnerMiddleware } from "../../middlewares/isAdvertisementOwner.middleware";

const advertisementRoutes = Router();

advertisementRoutes.post(
  "",
  verifyTokenMiddleware,
  validSerializerMiddleware(carAdCreateSerializer),
  advertisementsCreateController
);
advertisementRoutes.get("", listAllCarAdsController);

advertisementRoutes.patch(
  "/:id",
  verifyTokenMiddleware,
  isAdvertisementOwnerMiddleware,
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
  verifyTokenMiddleware,
  isAdvertisementOwnerMiddleware,
  verifyIfCarAdExistsMiddleware,
  deleteCarAdController
);
advertisementRoutes.post("/select",selectCarAdsController)

export default advertisementRoutes;
