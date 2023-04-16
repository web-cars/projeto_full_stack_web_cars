import { Request, Response } from "express";
import createUserService from "../../services/user/createUser.service";

const userCreateController = async (req: Request, res: Response) => {
  const newUser = await createUserService(req.body);
  return res.status(201).json(newUser);
};

export {
    userCreateController,
};
