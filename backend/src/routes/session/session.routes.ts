import { Router } from "express";
import { validSerializerMiddleware } from "../../middlewares/validSerializer.middleware";
import { sessionController } from "../../controllers/session/session.controller";
import { sessionSerializer } from "../../serializers/session.serializers";
const sessionRoutes = Router();

sessionRoutes.post(
  "",
  validSerializerMiddleware(sessionSerializer),
  sessionController
);

export default sessionRoutes;
