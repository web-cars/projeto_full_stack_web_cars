import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entity";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/errors";
import { IUserRequest, IUserResponse } from "../../interfaces/user";

export const createUserService = async ({
  address,
  ...dataUser
}: IUserRequest): Promise<IUserResponse> => {
  const usersRepository = AppDataSource.getRepository(Users);
  const addressesRepository = AppDataSource.getRepository(Addresses);

  const { email, cpf, cellphone } = dataUser;

  const userInDatabase = await usersRepository
    .createQueryBuilder("user")
    .where("user.email = :email", { email })
    .orWhere("user.cpf = :cpf", { cpf })
    .orWhere("user.cellphone = :cellphone", { cellphone })
    .getOne();
  if (userInDatabase)
    throw new AppError("User already exist's in our database.", 409);

  const newAddress = addressesRepository.create(address);
  await addressesRepository.save(newAddress);

  const {
    address: userAddress,
    advertisements,
    ...newUser
  } = usersRepository.create({ ...dataUser, address: newAddress });
  await usersRepository.save(newUser);

  return {
    user: { id: newUser.id, ...newUser },
    address: userAddress,
    advertisements,
  };
};
