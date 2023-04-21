import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Users } from "../entities/users.entity";

export const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(Users);
  const verifyIfUser = await userRepository.findBy({ id: req.user.id });
  if (!verifyIfUser?.length) {
    return res.status(400).json({
      message: "Cant access another user information",
    });
  }
  return next();
};
