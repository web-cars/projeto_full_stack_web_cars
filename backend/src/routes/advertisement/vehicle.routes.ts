import advertisementsCreateController from "../../controllers/advertisement/advertisement.controller";
import { Router } from "express";
import { verifyIfCarAdExistsMiddleware } from "../../middlewares/verifyIfCarAdExists.middleware";
import { validSerializerMiddleware } from "../../middlewares/validSerializer.middleware";
import { carAdUpdateSerializer } from "../../serializers/carAds.serializers";
import { updateCarAdController } from "../../controllers/advertisement/advertisement.controller";

const advertisementRoutes = Router();

advertisementRoutes.post("", advertisementsCreateController);

advertisementRoutes.patch(
  "/:id",
  verifyIfCarAdExistsMiddleware,
  validSerializerMiddleware(carAdUpdateSerializer),
  updateCarAdController
);

export default advertisementRoutes;