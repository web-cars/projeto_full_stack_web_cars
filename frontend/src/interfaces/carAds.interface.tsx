import { FieldValues } from "react-hook-form";

export interface iAxiosData {
    token: string;
}
export interface iErrorAxios {
    status: string;
    message: string;
}
export interface iCarAdsContextInterface {
    carAds: iCarAdsInterface[] | [];
    setCarAds: React.Dispatch<React.SetStateAction<iCarAdsInterface[] | []>>;
    specificAd: iCarAdsInterface | null;
    setSpecificAd: React.Dispatch<React.SetStateAction<iCarAdsInterface | null>>;
    fipe: iFipeResponseInterface | null;
    onSubmitCarAd: (data: FieldValues) => void;
    onDeleteCarAd: (id: string) => void;
    onGetSpecificAd: (id: string) => void;
    onUpdateCarAd: (id: string, data: FieldValues) => void;
    onFipeRequest: (brand: string, name: string, year: number, fuel: number) => void
}
export interface iCarAdsInterface {
    id: string;
    fipePrice: number;
    price: number;
    isActive: boolean;
    description: string;
    brand: iBrandInterface;
    image: iImageInterface[];
    model: iModelInterface;
    year: iYearInterface;
    fuel_type: iFuelTypeInterface;
    iColor: iColorInterface;
}

export interface iBrandInterface {
    id: string;
    name: string;
}
export interface iImageInterface {
    id: string;
    file: string;
    carId: string;
}
export interface iModelInterface {
    id: string;
    name: string;
}
export interface iYearInterface {
    id: string;
    year: number;
}
export interface iFuelTypeInterface {
    id: string;
    type: string;
}
export interface iColorInterface {
    id: string;
    name: string;
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