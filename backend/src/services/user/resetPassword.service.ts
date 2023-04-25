import AppDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/errors";

export const resetPasswordService = async (
  password: string,
  resetToken: string
): Promise<void> => {
  const usersRepository = AppDataSource.getRepository(Users);

  const user = await usersRepository.findOneBy({ resetToken });

  if (!user) throw new AppError("User not found.", 404);

  user.password = password;
  user.resetToken = null;
  usersRepository.save(user);
};
