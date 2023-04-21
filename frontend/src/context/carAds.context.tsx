import { createContext, useEffect, useState } from "react";
import { IAdswithPagination, ICarDataInterface, iCarAdsContextInterface, iCarAdsInterface, iErrorAxios, iFipeResponseInterface, iProviderProps } from "../interfaces/carAds.interface";
import { fipeInstance, instance } from "../services/instance";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { obterTipoDeVeiculo } from "../components/enum/fuel.enum";



export const CarAdsContext = createContext({} as iCarAdsContextInterface);

export const AdsProvider = ({ children }: iProviderProps) => {
  const [carAds, setCarAds] = useState<IAdswithPagination | null>(null)
  const [specificAd, setSpecificAd] = useState<iCarAdsInterface | null>(null)
  const [fipe, setFipe] = useState<iFipeResponseInterface | null>(null)
  const onSubmitCarAd = (data: FieldValues) => {
    console.log(data)
    data.fipePrice = Number(fipe?.value)
    data.fuel_type = Number(fipeCar?.fuel);
    data.price = Number(data.price)
    data.year = Number(fipeCar?.year)
    data.kilometers = Number(data.kilometers)
    createAd(data)
  }
  const onDeleteCarAd = (id: string) => deleteSpecificCarAd(id)
  const onGetSpecificAd = (id: string) => getSpecificCarAds(id)
  const onUpdateCarAd = (id: string, data: FieldValues) => editSpecificAd(id, data)
  const onFipeRequest = (brand: string, name: string, year: number, fuel: number) => getFipeCar(brand, name, year, fuel)
  const [fipeCar, setFipeCar] = useState<iFipeResponseInterface | undefined>(undefined)
  const [brand, setBrand] = useState<string>("")
  const [model, setModel] = useState<string>("")
  const [year, setYear] = useState<number | undefined>(0)
  const [fuel, setFuel] = useState<number | undefined>(0)
  const [options, setOptions] = useState<iFipeResponseInterface[] | null>(null)
  const createAd = (data: FieldValues) => {
    console.log(data)
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
        setSpecificAd(response.data.advertisement)

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
        setFipe(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const getCarInfos = (brand: string) => {
    fipeInstance.get(`cars?brand=${brand}`)
      .then((response) => {
        setOptions(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    if (brand) getCarInfos(brand)
  }, [brand])
  useEffect(() => {
    getCarAds(1)
  }, [])

  useEffect(() => {
    if (brand && model && year && fuel)
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
        setBrand,
        setYear,
        setModel,
        setFuel,
        options,
        setFipeCar,
        fipeCar
      }}
    >
      {children}
    </CarAdsContext.Provider>
  );
};
