import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Users } from "../entities/users.entity";
import { AppError } from "../errors/errors";

export const verifyIfUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(Users);
  const verifyIfUser = await userRepository.findOneBy({ id: req.user.id });

  if (!verifyIfUser) throw new AppError("User not found.", 404);

  return next();
};
