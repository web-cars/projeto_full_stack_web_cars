import { Images } from "../entities/images.entity";
import { Brand, FuelType, Year } from "../enum/carAds.enum";

interface ICarAdResponse {
  id: string;
  fipePrice: number;
  price: number;
  isActive: boolean;
  description: string;
  color: string;
  model: string;
  brand: Brand;
  year: Year;
  fuel_type: FuelType;
  images: Images[];
}

interface ICarAdUpdateRequest {
  price?: number;
  isActive?: boolean;
  description?: string;
  color?: string;
  model?: string;
  brand?: Brand;
  year?: Year;
  fuel_type?: FuelType;
  images?: Images[];
}

export { ICarAdResponse, ICarAdUpdateRequest };