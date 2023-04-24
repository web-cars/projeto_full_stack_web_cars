import { FieldValues } from "react-hook-form";
import { IUserReturn } from "../interface";

export interface iAxiosData {
    token: string;
}
export interface iErrorAxios {
    status: string;
    message: string;
}
export interface iCarAdsContextInterface {
    carAds: IAdswithPagination | null;
    setCarAds: React.Dispatch<React.SetStateAction<IAdswithPagination | null>>;
    specificAd: iCarAdsInterface | null;
    setSpecificAd: React.Dispatch<React.SetStateAction<iCarAdsInterface | null>>;
    fipe: iFipeResponseInterface | null;
    getCarAds: (page: number) => void;
    onSubmitCarAd: (data: FieldValues) => void;
    onDeleteCarAd: (id: string) => void;
    onGetSpecificAd: (id: string) => void;
    onUpdateCarAd: (id: string, data: FieldValues) => void;
    onFipeRequest: (brand: string, name: string, year: number, fuel: number) => void
    setBrand: React.Dispatch<React.SetStateAction<string>>;
    setYear: React.Dispatch<React.SetStateAction<number | undefined>>;
    setModel: React.Dispatch<React.SetStateAction<string>>;
    setFuel: React.Dispatch<React.SetStateAction<number | undefined>>;
    setFipeCar: React.Dispatch<React.SetStateAction<iFipeResponseInterface | undefined>>;
    fipeCar: iFipeResponseInterface | undefined
    options: iFipeResponseInterface[] | null;
}
export interface IAdswithPagination {
    advertisements: iCarAdsInterface[];
    pagination: IPagination
}
export interface ICarDataInterface {
    fipePrice: number;
    price: number;
    isActive: boolean;
    description: string;
    brand: string;
    kilometers: number;
    images: iImageInterface[];
    model: string;
    year: number;
    fuel_type: string;
    color: string;
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
export interface iCarAdsInterface {
    id: string;
    fipePrice: number;
    price: number;
    isActive: boolean;
    description: string;
    brand: string;
    kilometers: number;
    images: iImageInterface[];
    model: string;
    year: number;
    fuel_type: number;
    color: string;
    user: IUserReturn
}


export interface iImageInterface {
    // id: string;
    file: string;
    // carId: string;
}

export interface iProviderProps {
    children: React.ReactNode;
}

export interface iFipeResponseInterface {
    id: string;
    name: string;
    brand: string;
    year: string;
    fuel: number;
    value: number;
}