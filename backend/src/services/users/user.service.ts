import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entity";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/errors";
import { IUser, IUserWithoutPass } from "../../interfaces/users/user.interface";
import { userSchemaWithoutPassword } from "../../serializers/user.serializer";

export const createUserService = async (userData: IUser): Promise<any> => {
  try {
    const userRepository = AppDataSource.getRepository(Users);
    const addressRepository = AppDataSource.getRepository(Addresses);
    const verifyUser = await userRepository.findOneBy({
      email: userData.email,
    });
    if (verifyUser) {
      throw new AppError("User already exists", 409);
    }
    const createAddress = addressRepository.create(userData.address);
    await addressRepository.save(createAddress);

    const createUser = userRepository.create({
      ...userData,
      address: createAddress,
    });

    await userRepository.save(createUser);

    console.log({ createUser });
    const userReturnWithoutPass = userSchemaWithoutPassword.parse(createUser);

    return userReturnWithoutPass;
  } catch (err) {
    console.log(err);
  }
};
