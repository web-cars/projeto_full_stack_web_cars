import { Request, Response } from "express";
import { createUserService } from "../../services/user/createUser.service";
import { retrieveEspecificUserService } from "../../services/user/retrieveUser.service";
import { IUserUpdate } from "../../interfaces/user";
import { updateUserService } from "../../services/user/editUser.service";
import deleteUserService from "../../services/user/deleteUser.service";
import { resetPasswordService } from "../../services/user/resetPassword.service";
import { sendEmailService } from "../../services/user/sendEmail.service";

const retrieveEspecificUserController = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const user = await retrieveEspecificUserService(userId);
  return res.status(200).json(user);
};

const createUserController = async (request: Request, response: Response) => {
  const data = await createUserService(request.body);
  return response.status(201).json(data);
};

const updateUserController = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const userData: IUserUpdate = req.body;
  const updatedUser = await updateUserService(userData, userId);
  return res.status(200).json(updatedUser);
};

const deleteUserController = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const idToken = req.user.id;
  const deletedUser = await deleteUserService(userId, idToken);
  return res.status(200).json(deletedUser);
};
const sendEmailController = async (request: Request, response: Response) => {
  const token = await sendEmailService(
    request.body.email,
    request.protocol,
    "localhost:5173"
  );

  return response
    .status(200)
    .json({ message: "Token sended, check e-mail.", resetToken: token });
};

const resetPasswordController = async (
  request: Request,
  response: Response
) => {
  const token = request.params.token;

  await resetPasswordService(request.body, token);

  return response.status(200).json({ message: "Password changed." });
};

export {
  createUserController,
  retrieveEspecificUserController,
  sendEmailController,
  resetPasswordController,
  deleteUserController,
  updateUserController,
};
