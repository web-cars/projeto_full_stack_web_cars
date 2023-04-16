import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { Address } from "../../entities/addresses.entity";
import { IUserRequest } from "../../interfaces/user.interface";

const createUserService = async ({
    address,
    ...data
}: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const addresRepository = AppDataSource.getRepository(Address)
  const newUser = userRepository.create({...data});
  const completeUser = await userRepository.save(newUser);
  const newAddress = await addresRepository.save({...address,...completeUser});

  return {...newUser,...newAddress};
};

export default createUserService;
