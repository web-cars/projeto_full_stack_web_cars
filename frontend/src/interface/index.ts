import { ReactNode } from 'react'

export interface IChildren{
  children: ReactNode
}

export interface IInfoAd{
  car: string
  year: string
  km: string
  price: string
}

export interface ICardProfile{
  image: string
  name: string
  description: string
}

export interface IUser {
  id: number
  name: string
  email: string
  cpf: string
  cellphone: string
  password: string
  isAdmin: boolean
  birthDate: string
  description: string
  addressID: number
  image: string
}