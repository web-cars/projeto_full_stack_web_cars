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
  image?: string
  name?: string 
  description?: string
}