import "express-async-errors";
import "reflect-metadata";
import express from "express";
import advertisementRoutes from "./routes/advertisement/advertisement.routes";
import cors from "cors";
import { errorHandler } from "./errors/errorHandler";

const app = express();
app.use(express.json());
app.use(
  cors({
    allowedHeaders: [
      "sessionId",
      "Content-Type",
      "Authorization",
      "authorization",
    ],
    origin: ["http://localhost:5173"],
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  })
);
app.use("/advertisements", advertisementRoutes);
app.use(errorHandler);

export default app;
