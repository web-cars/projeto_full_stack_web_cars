import { Brand, FuelType, Year } from "../enum/carAds.enum";
import { z } from "zod";
import { imagesUpdateSerializer } from "./images.serializers";

const priceRegex = /^\d+(?:\.\d{1,2})?$/;

export const carAdUpdateSerializer = z.object({
  price: z
    .string()
    .regex(
      priceRegex,
      "Price must be a number with a maximum of 2 decimal places"
    )
    .transform((value) => parseFloat(value))
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

export const imagesCreateSerializer = z.object({
  file: z.string(),
});

export const carAdCreateSerializer = z.object({
  price: z
    .string()
    .regex(
      priceRegex,
      "Price must be a number with a maximum of 2 decimal places"
    )
    .transform((value) => parseFloat(value)),
  isActive: z.boolean().default(true),
  description: z.string().max(256).optional(),
  color: z.string().max(25),
  model: z.string().max(256),
  brand: z.nativeEnum(Brand),
  year: z.nativeEnum(Year),
  fuel_type: z.nativeEnum(FuelType),
  images: z.array(imagesCreateSerializer).nonempty(),
  fipePrice: z
    .string()
    .regex(
      priceRegex,
      "Price must be a number with a maximum of 2 decimal places"
    )
    .transform((value) => parseFloat(value)),
});
