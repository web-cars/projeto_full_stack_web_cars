import { Brand, FuelType, Year } from "../enum/carAds.enum";
import { z } from "zod";
import {
  imagesCreateSerializer,
  imagesUpdateSerializer,
} from "./images.serializers";

const carAdUpdateSerializer = z.object({
  price: z
    .number()
    .nonnegative()
    .transform((value) => parseFloat(value.toFixed(2)))
    .optional(),
  isActive: z.boolean().optional(),
  description: z.string().max(256).optional(),
  color: z.string().max(25).optional(),
  model: z.string().max(256).optional(),
  brand: z.nativeEnum(Brand).optional(),
  year: z.nativeEnum(Year).optional(),
  fuel_type: z.nativeEnum(FuelType).optional(),
  images: imagesUpdateSerializer.array().optional(),
});

const carAdCreateSerializer = z.object({
  price: z
    .number()
    .nonnegative()
    .transform((value) => parseFloat(value.toFixed(2))),
  isActive: z.boolean().default(true),
  description: z.string().max(256).optional(),
  color: z.string().max(25),
  model: z.string().max(256),
  brand: z.nativeEnum(Brand),
  year: z.nativeEnum(Year),
  fuel_type: z.nativeEnum(FuelType),
  images: z.array(imagesCreateSerializer).nonempty(),
  fipePrice: z
    .number()
    .nonnegative()
    .transform((value) => parseFloat(value.toFixed(2))),
});

export { carAdCreateSerializer, carAdUpdateSerializer };
