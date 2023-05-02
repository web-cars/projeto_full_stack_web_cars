import { query } from "express";
import AppDataSource from "../../data-source";
import { CarAds } from "../../entities/carAds.entity";
import {
  IListAllCarAdsResponse,
  IPagination,
  ISelect,
} from "../../interfaces/carAds.interfaces";
import { Repository } from "typeorm";

const selectAllCarAdsService = async (
  currentPage: number,
  filter:ISelect
): Promise<{
  advertisements: IListAllCarAdsResponse[];
  pagination: IPagination;
}> => {
 
  const advertisementsRepository = AppDataSource.getRepository(CarAds);
  const pagination = await createPaginationObject(currentPage,advertisementsRepository)
  const advertisements = await getListCarsAds(filter,currentPage,advertisementsRepository)

  const formattedAds = advertisements.map(
    ({ id, price, fipePrice, user, ...data }) => {
      const { password, advertisements, ...userWithoutPassword } = user;
      return {
        id,
        price: +price,
        fipePrice: +fipePrice,
        ...data,
        user: userWithoutPassword,
      };
    }
  );

  return { pagination, advertisements: formattedAds };
};

export default selectAllCarAdsService;

async function getListCarsAds(filter:ISelect,currentPage:number,repository:Repository<CarAds>): Promise<CarAds[]>{

  const {brand,model,color,year,fuel_type,kilometers_min,kilometers_max,price_min,price_max} = filter

  const PAGE_SIZE = 12;
  const skip = (currentPage - 1) * PAGE_SIZE;

  let query = await repository.createQueryBuilder('cars_ads').leftJoinAndSelect('cars_ads.user','users')

  if(brand){
    query = query.andWhere('brand = :brand',{brand:brand})
  }
  if(model){
    query = query.andWhere('model = :model',{model:model})
  }

  if(year){
    query = query.andWhere('year = :year',{year:year})
  }

  if(color){
    console.log(color)
    query = query.andWhere('color = :color',{color:color})
  }

  if(fuel_type){
    query = query.andWhere('fuel_type = :fuel_type',{fuel_type:fuel_type})
  }

  if(kilometers_min || kilometers_max){
    let kil_min = kilometers_min ? kilometers_min : 0
    let kil_max = kilometers_max ? kilometers_max : 0
    if(kil_min > kil_max){
      kil_max = kil_min * 100000
    }
    query = query.andWhere('kilometers BETWEEN :kil_min AND :kil_max',{kil_min:kil_min,kil_max:kil_max})
  }
  if(price_min || price_max){
    let pr_min = price_min ? price_min : 0
    let pr_max = price_max ? price_max : 0
    if(pr_min > pr_max){
      pr_max = pr_min * 100000
    }
    query = query.andWhere('price BETWEEN :pr_min AND :pr_max',{pr_min:pr_min,pr_max:pr_max})
  }

  query = query.skip(skip).take(PAGE_SIZE)

  const response =  await query.getMany()

  return response
}

async function createPaginationObject(currentPage:number,repository:Repository<CarAds>): Promise<IPagination>{

  const PAGE_SIZE = 12;
  const skip = (currentPage - 1) * PAGE_SIZE;

  const previousPage = `http://localhost:3000/advertisements?page=${
    currentPage - 1
  }`;
  const nextPage = `http://localhost:3000/advertisements?page=${
    currentPage + 1
  }`;

  const totalCount = await repository.count();

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  const hasNextPage = currentPage < totalPages;
  const hasPreviousPage = currentPage > 1;

  
  let pagination: IPagination = {
    total: totalCount,
    pageSize: PAGE_SIZE,
    currentPage,
    totalPages,
    hasNextPage,
    hasPreviousPage,
    nextPage,
    previousPage,
  };
  if (hasNextPage && !hasPreviousPage) {
    pagination = {
      total: totalCount,
      pageSize: PAGE_SIZE,
      currentPage,
      totalPages,
      hasNextPage,
      hasPreviousPage,
      nextPage,
    };
  } else if (!hasNextPage && hasPreviousPage) {
    pagination = {
      total: totalCount,
      pageSize: PAGE_SIZE,
      currentPage,
      totalPages,
      hasNextPage,
      hasPreviousPage,
      previousPage,
    };
  }

  return pagination
}