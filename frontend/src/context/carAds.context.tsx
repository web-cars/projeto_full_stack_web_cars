import { createContext, useEffect, useState } from "react";
import { IAdswithPagination, ICarDataInterface, iCarAdsContextInterface, iCarAdsInterface, iErrorAxios, iFipeResponseInterface, iProviderProps } from "../interfaces/carAds.interface";
import { fipeInstance, instance } from "../services/instance";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";



export const CarAdsContext = createContext({} as iCarAdsContextInterface);

export const AdsProvider = ({ children }: iProviderProps) => {
    const [carAds, setCarAds] = useState<IAdswithPagination | null>(null)
    const [specificAd, setSpecificAd] = useState<iCarAdsInterface | null>(null)
    const [fipe, setFipe] = useState<iFipeResponseInterface | null>(null)
    const onSubmitCarAd = (data: FieldValues) => createAd(data)
    const onDeleteCarAd = (id: string) => deleteSpecificCarAd(id)
    const onGetSpecificAd = (id: string) => getSpecificCarAds(id)
    const onUpdateCarAd = (id: string, data: FieldValues) => editSpecificAd(id, data)
    const onFipeRequest = (brand: string, name: string, year: number, fuel: number) => getFipeCar(brand, name, year, fuel)
    const [carData, setCarData] = useState<ICarDataInterface>({
        brand: "",
        model: "",
        year: 0,
        fuel_type: "",
        kilometers: 0,
        color: "",
        fipePrice: 0,
        price: 0,
        description: "",
        images: [],
        isActive: true,
    });

    const [brand, setBrand] = useState<string>("")
    const [model, setModel] = useState<string>("")
    const [year, setYear] = useState<number>(0)
    const [fuel, setFuel] = useState<number>(0)

    console.log(carData)
    const createAd = (data: FieldValues) => {
        instance
            .post("advertisements", data)
            .then(response => {
                getCarAds(1)
            })
            .catch((err: iErrorAxios) => {
                console.log(err)
            })
    }
    const getCarAds = (page: number) => {
        instance
            .get("advertisements", { params: { page: page } })
            .then((response) => {

                setCarAds(response.data)
            })
            .catch((err) =>
                console.log(err)
            )

    }
    const getSpecificCarAds = (id: string) => {
        instance
            .get(`advertisements/${id}`)
            .then((response) => {
                console.log(response.data)
                setSpecificAd(response.data)

            })
            .catch((err) =>
                console.log(err)
            )

    }
    const editSpecificAd = (id: string, data: FieldValues) => {

        instance
            .patch(`advertisements/${id}`, data)
            .then((response) => {
                getCarAds(1)
                setSpecificAd(response.data)

            })
            .catch((err) => {
                console.log(err)
            }
            )

    }
    const deleteSpecificCarAd = (id: string) => {
        instance
            .delete(`advertisements/${id}`)
            .then((response) => {
                getCarAds(1)
            })
            .catch((err) => {
                console.log(err)
            }
            )
    }

    const getFipeCar = (brand: string | undefined, name: string | undefined, year: number | undefined, fuel: number | undefined) => {
        fipeInstance.get("cars/unique", { params: { brand: brand, name: name, year: year, fuel: fuel } })
            .then((response) => {
                console.log(response.data)
                setFipe(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getCarAds(1)
    }, [])

    useEffect(() => {
        getFipeCar(brand, model, year, fuel)
    }, [brand, model, year, fuel])


    return (
        <CarAdsContext.Provider
            value={{
                carAds,
                specificAd,
                setCarAds,
                setSpecificAd,
                onSubmitCarAd,
                onDeleteCarAd,
                onGetSpecificAd,
                onUpdateCarAd,
                onFipeRequest,
                fipe,
                getCarAds,
                carData,
                setCarData,
                setBrand,
                setYear,
                setModel,
                setFuel
            }}
        >
            {children}
        </CarAdsContext.Provider>
    );
};
