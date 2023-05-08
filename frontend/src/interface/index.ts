import { ReactNode } from "react";
import { FieldValues } from "react-hook-form";
import { iCarAdsInterface } from "../interfaces/carAds.interface";

export interface IChildren {
  children: ReactNode;
}

export interface IInfoAd {
  car?: string;
  year?: number;
  km?: number;
  price?: number;
}

export interface ICardProfile {
  image?: string;
  name?: string;
  description?: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  password: string;
  isAdmin: boolean;
  birthDate: string;
  description: string;
  perfilPhoto: string;
  addressID: number;
  image: string;
}

export interface IUserReturn {
  id: number;
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  isAdmin: boolean;
  birthDate: string;
  description: string;
  perfilPhoto: string;
  addressID: number;
  image: string;
  advertisements: [iCarAdsInterface];
}
export interface IUserContext {
  user: IUserReturn | null;
  setUser: React.Dispatch<React.SetStateAction<IUserReturn | null>>;
  onSubmitSignUp: (data: FieldValues) => void;
  onSubmitLogin: (data: FieldValues) => void;
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  profile: boolean;
  setProfile: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitUpdate: (data: FieldValues) => void;
  onSubmitDelete: (data: FieldValues) => void;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  getProfile: () => Promise<void>;
  logout: Function;
  postLogin: (data: FieldValues) => void;
  deleteProfile: () => void;
  onSubmitSendEmail: (data: FieldValues) => void;
  onSubmitResetPassword: (data: FieldValues) => void;
  createUser: (data: FieldValues) => void;
  editProfile: (data: FieldValues) => void;
  resetToken: string;
}

