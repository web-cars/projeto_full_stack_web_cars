import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";
import { AppError } from "../errors/errors";
export const validSerializerMiddleware =
  (schema: AnyZodObject) =>
  (request: Request, response: Response, next: NextFunction) => {
    try {
      const validatedBody = schema.parse(request.body);

      request.body = validatedBody;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return response.json(error.issues).status(400);
      }
      next();
    }
  };
