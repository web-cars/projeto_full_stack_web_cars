import { z } from "zod";

export const imagesUpdateSerializer = z.object({
  file: z.string().optional(),
});

export const imagesCreateSerializer = z.object({
  file: z.string(),
});
