import { Router } from "express";
import { validSerializerMiddleware } from "../../middlewares/validSerializer.middleware";
import { userRegister } from "../../serializers/user.serializer";
import { createUserController } from "../../controllers/users/user.controller";
const userRoutes = Router();

userRoutes.post(
  "",
  validSerializerMiddleware(userRegister),
  createUserController
);

export default userRoutes;
