import { Request, Response } from "express";
import { SessionService } from "../../services/session/session.service";

export const sessionController = async (
  request: Request,
  response: Response
) => {
  const data = await SessionService(request.body);
  return response.status(200).json(data);
};
