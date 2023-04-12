import { createContext, useEffect, useState } from "react";
import { iCarAdsContextInterface, iCarAdsInterface, iErrorAxios, iFipeResponseInterface, iProviderProps } from "../interfaces/carAds.interface";
import { fipeInstance, instance } from "../services/instance";
import { FieldValues } from "react-hook-form";



export const CarAdsContext = createContext({} as iCarAdsContextInterface);

export const AdsProvider = ({ children }: iProviderProps) => {
    const [carAds, setCarAds] = useState<iCarAdsInterface[] | []>([])
    const [specificAd, setSpecificAd] = useState<iCarAdsInterface | null>(null)
    const [fipe, setFipe] = useState<iFipeResponseInterface | null>(null)

    const onSubmitCarAd = (data: FieldValues) => createAd(data)
    const onDeleteCarAd = (id: string) => deleteSpecificCarAd(id)
    const onGetSpecificAd = (id: string) => getSpecificCarAds(id)
    const onUpdateCarAd = (id: string, data: FieldValues) => editSpecificAd(id, data)
    const onFipeRequest = (brand: string, name: string, year: number, fuel: number) => getFipeCar(brand, name, year, fuel)

    const createAd = (data: FieldValues) => {
        instance
            .post("advertisements", data)
            .then(response => {
                getCarAds()
            })
            .catch((err: iErrorAxios) => {
                console.log(err)
            })
    }
    const getCarAds = () => {
        instance
            .get("advertisements")
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
                setCarAds(response.data)
            })
            .catch((err) =>
                console.log(err)
            )

    }
    const editSpecificAd = (id: string, data: FieldValues) => {

        instance
            .patch(`advertisements/${id}`, data)
            .then((response) => {
                getCarAds()
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
                getCarAds()
            })
            .catch((err) => {
                console.log(err)
            }
            )
    }

    const getFipeCar = (brand: string, name: string, year: number, fuel: number) => {
        fipeInstance.get("cars/unique", { params: { brand: brand, name: name, year: year, fuel: fuel } })
            .then((response) => {
                setFipe(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getCarAds()
    }, [])




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
                fipe
            }}
        >
            {children}
        </CarAdsContext.Provider>
    );
};
