import "express-async-errors";
import "reflect-metadata";
import express from "express";
import advertisementRoutes from "./routes/advertisement/advertisement.routes";
import cors from "cors";
import { errorHandler } from "./errors/errorHandler";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/advertisements", advertisementRoutes);
app.use(errorHandler);

export default app;
