import AppDataSource from "../../data-source";
import { CarAds } from "../../entities/carAds.entity";
import {
  IListAllCarAdsResponse,
  IPagination,
} from "../../interfaces/carAds.interfaces";

const listAllCarAdsService = async (
  currentPage: number
): Promise<{
  advertisements: IListAllCarAdsResponse[];
  pagination: IPagination;
}> => {
  const PAGE_SIZE = 12;
  const skip = (currentPage - 1) * PAGE_SIZE;

  const advertisementsRepository = AppDataSource.getRepository(CarAds);

  const totalCount = await advertisementsRepository.count();

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  const hasNextPage = currentPage < totalPages;
  const hasPreviousPage = currentPage > 1;

  const previousPage = `http://localhost:3000/advertisements?page=${
    currentPage - 1
  }`;
  const nextPage = `http://localhost:3000/advertisements?page=${
    currentPage + 1
  }`;
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

  const advertisements = await advertisementsRepository.find({
    skip: skip,
    take: PAGE_SIZE,
    relations: {
      user: true,
    },
  });

  const formattedAds = advertisements.map(
    ({ id, price, fipePrice, user, ...data }) => {
      const { password, advertisements, ...userWithoutPassword } = user;
      return {
        id,
        price: +price,
        fipePrice: +fipePrice,
        ...data,
        advertisements: {
          user: userWithoutPassword,
        },
      };
    }
  );

  return { pagination, advertisements: formattedAds };
};

export default listAllCarAdsService;
