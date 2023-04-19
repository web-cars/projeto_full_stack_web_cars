import { Addresses } from "../../entities/addresses.entity";
import { CarAds } from "../../entities/carAds.entity";
import { Users } from "../../entities/users.entity";

interface IUserRequest {
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  password: string;
  isAdmin: boolean;
  birthDate: string;
  description?: string;
  perfilPhoto?: string;
  address: Addresses;
}

interface IUserResponse {
  user: {
    id: string;
    name: string;
    email: string;
    cpf: string;
    cellphone: string;
    password: string;
    isAdmin: boolean;
    birthDate: string;
    description?: string;
    perfilPhoto?: string;
  };
  address: Addresses;
  advertisements: CarAds[];
}

export { IUserRequest, IUserResponse };
