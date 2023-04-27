import AppDataSource from "../../data-source"
import { Addresses } from "../../entities/addresses.entity"
import { IAdress } from "../../interfaces/adress"
import { returnAdressUpdateSchema } from "../../serializers/address.serializers"

const updateAdressService = async (adressData: IAdress, idAdress: string): Promise<IAdress> =>{
   const adressRepo = AppDataSource.getRepository(Addresses)
   const oldAdress = await adressRepo.findOneBy({id: idAdress})
   const adress = adressRepo.create({...oldAdress, ...adressData})
   await adressRepo.save(adress)
   const updateAdress:any = returnAdressUpdateSchema.parse(adress)
   return updateAdress
}

export default updateAdressService