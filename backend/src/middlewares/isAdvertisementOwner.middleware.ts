import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { CarAds } from "../entities/carAds.entity";
import { AppError } from "../errors/errors";

export const isAdvertisementOwnerMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const advertisementsRepository = AppDataSource.getRepository(CarAds);
  const userId = request.user.id;
  const advertisementId = request.params.id;

  const advertisement = await advertisementsRepository.findOne({
    where: { id: advertisementId },
    relations: {
      user: true,
    },
  });

  if (advertisement.user.id !== userId)
    throw new AppError("You aren't this advertisement owner.", 403);

  next();
};
