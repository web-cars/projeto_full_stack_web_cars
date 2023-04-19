import { z } from "zod";

const createAddressSerializer = z.object({
  cep: z.string().max(9),
  state: z.string().max(127),
  city: z.string().max(127),
  street: z.string().max(255),
  number: z.number().int().positive(),
  complement: z.string().optional().nullable(),
});

const addressSchemaReturn = z.object({
  id: z.string(),
  cep: z.string().regex(/^\d{5}-\d{3}$/),
  state: z.string(),
  city: z.string(),
  street: z.string(),
  number: z.number(),
  complement: z.string().optional(),
});

export { addressSchemaReturn, createAddressSerializer };
