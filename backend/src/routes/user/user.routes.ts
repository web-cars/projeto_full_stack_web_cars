import { Router } from "express";
import { validSerializerMiddleware } from "../../middlewares/validSerializer.middleware";
import { userRegister } from "../../serializers/user.serializer";
import {
  createUserController,
  retrieveEspecificUserController,
} from "../../controllers/users/user.controller";
import { verifyTokenMiddleware } from "../../middlewares/verifyToken.middleware";
import { verifyUser } from "../../middlewares/verifyUser.middleware";
const userRoutes = Router();

userRoutes.post(
  "",
  validSerializerMiddleware(userRegister),

  createUserController
);
userRoutes.get(
  "/infos",
  verifyTokenMiddleware,
  verifyUser,
  retrieveEspecificUserController
);

export default userRoutes;
