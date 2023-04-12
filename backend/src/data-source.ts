import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";
import "dotenv/config";

const setDataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{js,ts}");
  const migrationsPath: string = path.join(__dirname, "./migrations/**.{js,ts}");

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
    host: process.env.HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    port: parseInt(process.env.PGPORT),
    database: process.env.DB_DB,
    synchronize: false,
    logging: false,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
};

const AppDataSource = new DataSource(setDataSourceConfig());
export default AppDataSource;


