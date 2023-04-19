import AppDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/errors";
import { userSchemaWithoutPassword } from "../../serializers/user.serializer";

export const retrieveEspecificUserService = async (
  idUser: string
): Promise<any> => {
  try {
    const userRepository = AppDataSource.getRepository(Users);
    const specificUser = await userRepository.findOneBy({ id: idUser });

    if (!specificUser) {
      throw new AppError("user not found", 404);
    }
    console.log(specificUser);
    const userReturnWithoutPass = userSchemaWithoutPassword.parse(specificUser);
    console.log("oi");

    return userReturnWithoutPass;
  } catch (err) {
    console.log(err);
  }
};
