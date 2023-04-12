import { z } from "zod";

export const imagesUpdateSerializer = z.object({
  file: z.string().optional(),
});
