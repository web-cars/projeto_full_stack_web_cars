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
  images: Images[];
}
