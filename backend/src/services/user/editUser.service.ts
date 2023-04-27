import { hashSync } from "bcryptjs";
import AppDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/errors";
import { IUserResponse, IUserUpdate } from "../../interfaces/user/index";
export const updateUserService = async (
  userData: IUserUpdate,
  userId: string
): Promise<IUserResponse> => {
  if (!userData) {
    throw new AppError("Missing Params", 401);
  }
  const userRepository = AppDataSource.getRepository(Users);
  const user = await userRepository.findOneBy({ id: userId });
  if (!user) {
    throw new AppError("User not found", 404);
  }

  const newObj = {
    ...user,
    ...userData,
  };

  await userRepository.save(newObj);
  const {
    password,
    id,
    description,
    perfilPhoto,
    address: userAddress,
    advertisements,
    ...userWithoutPassword
  } = newObj;

  return {
    id,
    ...userWithoutPassword,
    description,
    perfilPhoto,
    address: userAddress,
    advertisements: advertisements || [],
  };
};
