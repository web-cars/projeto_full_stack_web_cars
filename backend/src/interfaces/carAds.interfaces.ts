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
  kilometers: number;
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
  kilometers?: number;
  brand?: Brand;
  year?: Year;
  fuel_type?: FuelType;
  images?: Images[];
}
interface ICreateCarAdResponse {
  fipePrice: number;
  price: number;
  isActive: boolean;
  description: string;
  color: string;
  model: string;
  kilometers: number;
  brand: Brand;
  year: Year;
  fuel_type: FuelType;
  images: Images[];
}
interface IPagination {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  total: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  nextPage?: string;
  previousPage?: string;
}
export {
  ICarAdResponse,
  ICarAdUpdateRequest,
  ICreateCarAdResponse,
  IPagination,
};
