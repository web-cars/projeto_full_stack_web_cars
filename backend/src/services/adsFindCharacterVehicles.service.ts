import AppDataSource from "../data-source";
import { Advertisements } from "../entities/advertisements.entity";
import { IAdsCharactersResponse } from "../interfaces/advertisement";


const findCharacterVehiclesService = async (vehicle_type:string):Promise<IAdsCharactersResponse> => {
  const characters = {
    colors:[],
    models:[],
    years:[],
    brands:[],
    fuels_type:[]
  }
  const adversimentRepository = AppDataSource.getRepository(Advertisements);
  const adversitements = await adversimentRepository.createQueryBuilder("advertisements")
    .where("vehicle_type = :vehicle_type",{vehicle_type:vehicle_type})
    .distinctOn(['color','brand','model','year','fuel_type']).orderBy('model','ASC').getMany()
 if(adversitements.length > 0){
    characters.colors.push(adversitements[0].color)
    characters.brands.push(adversitements[0].brand)
    characters.fuels_type.push(adversitements[0].fuel_type)
    characters.models.push(adversitements[0].model)
    characters.years.push(adversitements[0].year)

    const colors = adversitements.filter(element => element.color != characters.colors[0])
    const brands = adversitements.filter(element => element.brand != characters.brands[0])
    const models = adversitements.filter(element => element.model != characters.models[0])
    const years =  adversitements.filter(element => element.year != characters.years[0])
    const fuel_type =  adversitements.filter(element => element.fuel_type != characters.fuels_type[0])
    if(colors.length > 0){
        colors.forEach(element => {
            if(!characters.colors.includes(element.color)){
                characters.colors.push(element.color)
            }
        })
    }
    if(brands.length > 0){
        brands.forEach(element => {
            if(!characters.brands.includes(element.brand)){
                  characters.brands.push(element.brand)
            }
        })
    }
    if(models.length > 0){
        models.forEach(element => {
            if(!characters.models.includes(element.model)){
                characters.models.push(element.model)
            }
        })
    }
    if(years.length > 0){
        years.forEach(element => {
            if(!characters.years.includes(element.year)){
                characters.years.push(element.year)
            }
        })
    }
    if(fuel_type.length > 0){
        fuel_type.forEach(element => {
            if(!characters.fuels_type.includes(element.fuel_type)){
                 characters.fuels_type.push(element.fuel_type)
            }
        })
    }

 }
 

  
  return {characters}
}


export default findCharacterVehiclesService;
