import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { CarAds } from "../entities/carAds.entity";
import { AppError } from "../errors/errors";

export const verifyIfCarAdExistsMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const carAdRepository = AppDataSource.getRepository(CarAds);
  const id = request.params.id;
  const carAd = await carAdRepository.findOneBy({
    id,
  });

  if (!carAd) throw new AppError("Car advertisement not found.", 404);

  next();
};
