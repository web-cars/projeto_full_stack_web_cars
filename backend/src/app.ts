import "express-async-errors";
import "reflect-metadata";
import express from "express";
import advertisementRoutes from "./routes/advertisement/advertisement.routes";
import cors from "cors";
import { errorHandler } from "./errors/errorHandler";
import SessionRoutes from "./routes/session/session.routes";
import userRoutes from "./routes/user/user.routes";
import adressRoutes from "./routes/adress/adress.route";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/advertisements", advertisementRoutes);
app.use("/users", userRoutes);
app.use("/session", SessionRoutes);
app.use("/adress", adressRoutes);
app.use(errorHandler);

export default app;
