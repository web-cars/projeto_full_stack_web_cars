import { Router } from "express";
import { listCarAdController } from "../controllers/carAds.controllers";

const carAdsRoutes : Router = Router()

carAdsRoutes .get('', listCarAdController)

export  { carAdsRoutes } 