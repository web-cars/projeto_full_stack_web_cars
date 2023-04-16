import { z } from "zod";

const addressCreateSerializer = z.object({
    cep: z.string().regex(/^\d{5}-\d{3}$/),
    state: z.string().min(3).max(50),
    city: z.string().min(3).max(50),
    street: z.string().min(3).max(100),
    number: z.string().min(1).max(10),
    complement: z.string().max(50).optional(),
});

export { addressCreateSerializer};
