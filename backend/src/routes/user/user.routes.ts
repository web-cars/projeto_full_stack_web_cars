import { Router } from "express";
import { validSerializerMiddleware } from "../../middlewares/validSerializer.middleware";
import {
  createUserController,
  retrieveEspecificUserController,
} from "../../controllers/user/user.controller";
import { verifyTokenMiddleware } from "../../middlewares/verifyToken.middleware";
import { verifyUser } from "../../middlewares/verifyUser.middleware";
import { userCreateSerializer } from "../../serializers/user.serializers";
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

export default userRoutes;
