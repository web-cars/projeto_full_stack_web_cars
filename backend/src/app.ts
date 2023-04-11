import "express-async-errors";
import "reflect-metadata";
import express from "express";
import cors from "cors";
import { errorHandler } from "./errors/errorHandler";
import { carAdsRoutes } from "./routes/carAds.routes";

const app = express();
app.use(express.json());
app.use("/carads", carAdsRoutes);
app.use(errorHandler);

export default app;
