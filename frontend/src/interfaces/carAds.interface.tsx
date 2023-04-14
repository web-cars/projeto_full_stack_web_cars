import { FieldValues } from "react-hook-form";

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
}
export interface IAdswithPagination {
    ads: iCarAdsInterface[];
    pagination: IPagination
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
    iColor: string;
}


export interface iImageInterface {
    id: string;
    file: string;
    carId: string;
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