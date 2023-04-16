import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Address } from "./entities/addresses.entity";
import { CarAds } from "./entities/carAds.entity";
import { Images } from "./entities/images.entity";


const setDataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{js,ts}");
  const migrationsPath: string = path.join(
    __dirname,
    "./migrations/**.{js,ts}"
  );

  const nodeEnv = process.env.NODE_ENV;

  if (nodeEnv === "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [entitiesPath],
      migrations: [migrationsPath],
    };
  }

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  return {
    type: "postgres",
    host: process.env.PGHOST,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: parseInt(process.env.PGPORT || '5432'),
    database: process.env.PGDATABASE,
    synchronize: false,
    logging: false,
    entities: [User,Address,CarAds,Images],
    migrations: [migrationsPath],
  };
};

const AppDataSource = new DataSource(setDataSourceConfig());
export default AppDataSource;
