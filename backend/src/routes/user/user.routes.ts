import { Router } from "express";
import { validSerializerMiddleware } from "../../middlewares/validSerializer.middleware";
import {
  createUserController,
  retrieveEspecificUserController,
} from "../../controllers/user/user.controller";
import { verifyTokenMiddleware } from "../../middlewares/verifyToken.middleware";
import { verifyUser } from "../../middlewares/verifyUser.middleware";
import { userCreateSerializer } from "../../serializers/user.serializers";
import { deleteUserController } from "../../controllers/user/user.controller";

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
userRoutes.delete(
  "/:id",
  verifyTokenMiddleware,
  deleteUserController
);
export default userRoutes;
