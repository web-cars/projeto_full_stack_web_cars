import { z } from "zod";

const createAddressSerializer = z.object({
  cep: z.string().regex(/^\d{5}-\d{3}$/, "Format is 00000-000"),
  state: z.string(),
  city: z.string(),
  street: z.string(),
  number: z.number(),
  complement: z.string().optional(),
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
const returnAdressUpdateSchema = addressSchemaReturn.partial()

export { addressSchemaReturn, createAddressSerializer, returnAdressUpdateSchema };
