import AppDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/errors";

const deleteUserService = async (idUser: string, tokenId: string) => {
  if (idUser !== tokenId)
    throw new AppError("You cannot delete another user", 401);
  const userRepository = AppDataSource.getRepository(Users);

  const findUser = await userRepository.findOneBy({
    id: idUser,
  });

  if (!findUser) throw new AppError("User not found.", 404);

  await userRepository.delete(idUser);

  return { message: "User deleted successfully" };
};

export default deleteUserService;
