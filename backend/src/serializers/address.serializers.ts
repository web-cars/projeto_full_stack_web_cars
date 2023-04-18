import { z } from "zod";

export const createAddressSerializer = z.object({
  cep: z.string().max(9),
  state: z.string().max(127),
  city: z.string().max(127),
  street: z.string().max(255),
  number: z.number().int().positive(),
  complement: z.string().optional().nullable(),
});
