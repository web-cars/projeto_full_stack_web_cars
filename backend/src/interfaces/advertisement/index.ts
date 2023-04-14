import { Images } from "../../entities/images.entity";

export interface IAdvertisementRequest {
    brand: string;
    model: string;
    year: number;
    fuel_type: string;
    color: string;
    fipePrice: number;
    price: number;
    isActive: boolean;
    description: string;
    vehicle_type: string;
    images: Images[]
  }

export interface IAdsCharactersResponse {
characters:{
    colors:string[],
    years:number[],
    fuels_type:string[],
    models:string[],
    brands:string[]
}
}