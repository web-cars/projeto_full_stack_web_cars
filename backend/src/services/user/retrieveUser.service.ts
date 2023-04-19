import AppDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/errors";
import { IUserResponse } from "../../interfaces/user";

export const retrieveEspecificUserService = async (
  idUser: string
): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(Users);
  const specificUser = await userRepository.findOneBy({ id: idUser });

  if (!specificUser) throw new AppError("User not found.", 404);

  const { password, advertisements, ...userWithoutPassword } = specificUser;
  return { ...userWithoutPassword, advertisements };
};
