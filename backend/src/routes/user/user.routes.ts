import { Router } from "express";
import { validSerializerMiddleware } from "../../middlewares/validSerializer.middleware";
import { createUserController } from "../../controllers/user/user.controller";
import { userCreateSerializer } from "../../serializers/user.serializers";

const userRoutes = Router();

userRoutes.post(
  "",
  validSerializerMiddleware(userCreateSerializer),
  createUserController
);

export default userRoutes;
