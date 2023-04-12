import { Router } from "express";
import { validSerializerMiddleware } from "../middlewares/validSerializer.middleware";
import { updateCarAdController } from "../controllers/carAds.controllers";
import { carAdUpdateSerializer } from "../serializers/carAds.serializers";
import { verifyIfCarAdExistsMiddleware } from "../middlewares/verifyIfCarAdExists.middleware";

export const carAdsRoutes = Router();

carAdsRoutes.patch(
  "/:id",
  verifyIfCarAdExistsMiddleware,
  validSerializerMiddleware(carAdUpdateSerializer),
  updateCarAdController
);
