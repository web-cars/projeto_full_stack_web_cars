import { Request, Response } from "express";
import { createUserService } from "../../services/user/createUser.service";
import { retrieveEspecificUserService } from "../../services/user/retrieveUser.service";

const retrieveEspecificUserController = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const user = await retrieveEspecificUserService(userId);
  return res.status(200).json(user);
};

const createUserController = async (request: Request, response: Response) => {
  const data = await createUserService(request.body);
  return response.status(201).json(data);
};

export { createUserController, retrieveEspecificUserController };
