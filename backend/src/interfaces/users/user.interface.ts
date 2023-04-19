export interface IUser {
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  password: string;
  isAdmin: boolean;
  birthDate: string;
  description: string;
  perfilPhoto: string;
  address: AddressInterface;
}
export interface IUserWithoutPass {
  id: string;
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  isAdmin: boolean;
  birthDate: string;
  description: string;
  perfilPhoto: string;
  address: AddressInterface;
}

export interface AddressInterface {
  id: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement?: string;
}
