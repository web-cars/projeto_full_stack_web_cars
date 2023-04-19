import { z } from "zod";

export const addressSchema = z.object({
  cep: z.string().regex(/^\d{5}-\d{3}$/),
  state: z.string(),
  city: z.string(),
  street: z.string(),
  number: z.number(),
  complement: z.string().optional(),
});
export const addressSchemaReturn = z.object({
  id: z.string(),
  cep: z.string().regex(/^\d{5}-\d{3}$/),
  state: z.string(),
  city: z.string(),
  street: z.string(),
  number: z.number(),
  complement: z.string().optional(),
});
export const userSchemaWithoutPassword = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/),
  cellphone: z.string().regex(/^\(\d{2}\) \d{4,5}\-\d{4}$/),
  isAdmin: z.boolean(),
  birthDate: z.string().regex(/^\d{4}\-\d{2}\-\d{2}$/),
  description: z.string(),
  perfilPhoto: z.string(),
  address: addressSchemaReturn,
});

export const userRegister = z.object({
  name: z.string(),
  email: z.string().email(),
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/),
  cellphone: z.string().regex(/^\(\d{2}\) \d{4,5}\-\d{4}$/),
  password: z.string(),
  isAdmin: z.boolean(),
  birthDate: z.string().regex(/^\d{4}\-\d{2}\-\d{2}$/),
  description: z.string(),
  perfilPhoto: z.string(),
  address: addressSchema,
});
