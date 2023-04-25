import { Addresses } from "../../entities/addresses.entity";
import { CarAds } from "../../entities/carAds.entity";

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
  id: string;
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  isAdmin: boolean;
  birthDate: string;
  description: string;
  perfilPhoto: string;
  address: Addresses;
  advertisements?: CarAds[];
}

interface IUserUpdate {
  name?: string;
  email?: string;
  cpf?: string;
  cellphone?: string;
  birthDate?: string;
  description?: string;
}

export { IUserRequest, IUserResponse, IUserUpdate };
