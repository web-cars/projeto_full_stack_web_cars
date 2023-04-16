import { z } from "zod";
import { addressCreateSerializer } from "./address.serializers";

const userCreateSerializer = z.object({
  name: z.string().max(256),
  email:z.string().max(256),
  cpf:z.string().max(14),
  password:z.string().max(20),
  birthdate:z.string().max(25),
  cellPhone:z.string().max(20).optional(),
  isAdmin: z.boolean().default(false),
  description: z.string().max(256).optional(),
  address: addressCreateSerializer,
});

export { userCreateSerializer};
