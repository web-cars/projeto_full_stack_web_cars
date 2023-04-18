import { z } from "zod";
import { createAddressSerializer } from "./address.serializers";

const userCreateSerializer = z.object({
  name: z.string().max(255),
  email: z.string().email().max(127),
  cpf: z.string().max(14),
  cellphone: z.string().max(12),
  password: z.string(),
  isAdmin: z.boolean(),
  birthDate: z.custom((value: string) => {
    const parsedDate = new Date(
      value.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")
    );
    if (isNaN(parsedDate.getTime())) throw new Error("Invalid date");
    return parsedDate;
  }),
  description: z.string().optional().nullable(),
  perfilPhoto: z.string().optional().nullable(),
  address: z.lazy(() => createAddressSerializer),
});

export { userCreateSerializer };
