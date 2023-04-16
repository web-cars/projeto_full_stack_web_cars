import { Router } from "express";
import { userCreateController } from "../../../controllers/user/user.controller";
import { userCreateSerializer } from "../../../serializers/user.serializers";
import { validSerializerMiddleware } from "../../../middlewares/validSerializer.middleware";

const userRoutes = Router();

userRoutes.post(
  "",validSerializerMiddleware(userCreateSerializer),
  userCreateController
);

export default userRoutes;
