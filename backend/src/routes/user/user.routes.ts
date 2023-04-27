import { Router } from "express";
import { validSerializerMiddleware } from "../../middlewares/validSerializer.middleware";

import {
  createUserController,
  sendEmailController,
  retrieveEspecificUserController,
  updateUserController,
  resetPasswordController,
  deleteUserController,
} from "../../controllers/user/user.controller";

import { verifyUser } from "../../middlewares/verifyUser.middleware";
import {
  userCreateSerializer,
  userUpdateSchema,
} from "../../serializers/user.serializers";

import { verifyTokenMiddleware } from "../../middlewares/verifyToken.middleware";

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

userRoutes.delete("/:id", verifyTokenMiddleware, deleteUserController);

userRoutes.post("/resetPassword", sendEmailController);
userRoutes.patch("/resetPassword/:token", resetPasswordController);

export default userRoutes;
