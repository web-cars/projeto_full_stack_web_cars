import { Router } from "express";
import { validSerializerMiddleware } from "../../middlewares/validSerializer.middleware";
import {
  createUserController,
  retrieveEspecificUserController,
  updateUserController,
} from "../../controllers/user/user.controller";
import { verifyTokenMiddleware } from "../../middlewares/verifyToken.middleware";
import { verifyUser } from "../../middlewares/verifyUser.middleware";
import {
  userCreateSerializer,
  userUpdateSchema,
} from "../../serializers/user.serializers";
const userRoutes = Router();

userRoutes.post(
  "",
  validSerializerMiddleware(userCreateSerializer),
  createUserController
);
userRoutes.get(
  "/infos",
  verifyTokenMiddleware,
  verifyUser,
  retrieveEspecificUserController
);
userRoutes.patch(
  "/:id",
  validSerializerMiddleware(userUpdateSchema),
  verifyTokenMiddleware,
  verifyUser,
  updateUserController
);

export default userRoutes;
