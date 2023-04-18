import { Request, Response } from "express";
import {
  createUserService,
  retrieveEspecificUserService,
} from "../../services/users/user.service";

export const createUserController = async (req: Request, res: Response) => {
  const userData = req.body;
  const user = await createUserService(userData);
  return res.status(201).json(user);
};
export const retrieveEspecificUserController = async (
  req: Request,
  res: Response
) => {
  const userId = req.user?.id;
  const user = await retrieveEspecificUserService(userId);
  return res.status(200).json(user);
};
