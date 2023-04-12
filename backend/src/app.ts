import "express-async-errors";
import "reflect-metadata";
import express, { Request, Response } from "express";
import advertisementRoutes from "./routes/advertisement/vehicle.routes";
import cors from "cors";
import { errorHandler } from "./errors/errorHandler";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/advertisements", advertisementRoutes);

export default app;
