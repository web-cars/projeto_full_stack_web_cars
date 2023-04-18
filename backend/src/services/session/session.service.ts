import AppDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/errors";
import { ISessionRequest, ISessionResponse } from "../../interfaces/session";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
export const SessionService = async ({
  email,
  password,
}: ISessionRequest): Promise<ISessionResponse> => {
  const usersRepository = AppDataSource.getRepository(Users);
  const user = await usersRepository.findOneBy({ email });

  if (!user) throw new AppError("Invalid email or password.");

  const isPasswordValid = await compare(password, user.password);

  if (!isPasswordValid) throw new AppError("Invalid email or password.");

  const token = jwt.sign(
    { isAdm: user.isAdmin },
    process.env.SECRETKEY as string,
    {
      subject: user.id,
      expiresIn: "24h",
    }
  );

  return { token };
};
