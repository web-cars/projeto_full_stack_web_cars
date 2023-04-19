import { Addresses } from "../entities/addresses.entity";
import { Images } from "../entities/images.entity";
import { Users } from "../entities/users.entity";
import { Brand, FuelType, Year } from "../enum/carAds.enum";

interface ICarAdResponse {
  advertisement: {
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
  };
  user: {
    id: string;
    name: string;
    email: string;
    address: Addresses;
  };
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

interface ICarAdUpdateResponse {
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

interface IListAllCarAdsResponse {
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
export {
  IListAllCarAdsResponse,
  ICarAdResponse,
  ICarAdUpdateRequest,
  ICreateCarAdResponse,
  IPagination,
  ICarAdUpdateResponse,
};
