import { IAddress } from "./address.interface";

export interface IUserRequest {
  name: string;
  email: string;
  cpf: string;
  cellPhone: string;
  birthdate: Date;
  description: string;
  address: IAddress;
  password: string;
  isAdmin: boolean;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  cpf?: string;
  cellPhone?: string;
  birthdate?: Date;
  description?: string;
  address?: IAddress;
  password?: string;
}