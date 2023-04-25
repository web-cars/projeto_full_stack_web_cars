import { Request, Response } from "express";
import { createUserService } from "../../services/user/createUser.service";
import { retrieveEspecificUserService } from "../../services/user/retrieveUser.service";
import deleteUserService from "../../services/user/deleteUser.service";
import { resetPasswordService } from "../../services/user/resetPassword.service";
import { sendEmailService } from "../../services/user/sendEmail.service";

const retrieveEspecificUserController = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const user = await retrieveEspecificUserService(userId);
  return res.status(200).json(user);
};

const createUserController = async (request: Request, response: Response) => {
  console.log(request.body);
  const data = await createUserService(request.body);
  return response.status(201).json(data);
};

const deleteUserController = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const idToken = req.user.id;
  const deletedUser = await deleteUserService(userId, idToken);
  return res.status(200).json(deletedUser);
};
const sendEmailController = async (request: Request, response: Response) => {
  const host = request.get("host");
  const token = await sendEmailService(
    request.body.email,
    request.protocol,
    host
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
  const password = request.body.password;

  await resetPasswordService(password, token);

  return response.status(200).json({ message: "Password changed." });
};

export {
  createUserController,
  retrieveEspecificUserController,
  sendEmailController,
  resetPasswordController,
  deleteUserController,
};
