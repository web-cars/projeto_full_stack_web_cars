import { Request, Response } from "express";
import { createUserService } from "../../services/user/createUser.service";

const createUserController = async (request: Request, response: Response) => {
  const data = await createUserService(request.body);
  return response.status(201).json(data);
};

export { createUserController };
