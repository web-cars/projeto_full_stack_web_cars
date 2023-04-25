import { z } from "zod";
import {
  addressSchemaReturn,
  createAddressSerializer,
} from "./address.serializers";

const userCreateSerializer = z.object({
  name: z.string().max(255),
  email: z.string().email().max(127),
  cpf: z
    .string()
    .regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "Format is 123.456.789-00"),
  cellphone: z
    .string()
    .regex(/^\(\d{2}\) \d{4,5}\-\d{4}$/, "Format is (12) 12345-6789"),
  isAdmin: z.boolean(),
  password: z.string(),
  birthDate: z.string().regex(/^\d{4}\-\d{2}\-\d{2}$/, "Format is YYYY-MM-DD"),
  description: z.string().optional().nullable(),
  perfilPhoto: z.string().optional().nullable(),
  address: z.lazy(() => createAddressSerializer),
});

const userSchemaWithoutPassword = z.object({
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
const userUpdateSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  cpf: z
    .string()
    .regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)
    .optional(),
  cellphone: z
    .string()
    .regex(/^\(\d{2}\) \d{4,5}\-\d{4}$/)
    .optional(),
  irthDate: z
    .string()
    .regex(/^\d{4}\-\d{2}\-\d{2}$/)
    .optional(),
  description: z.string().optional(),
});
export { userCreateSerializer, userSchemaWithoutPassword, userUpdateSchema };
