import { z } from "zod";

export const sessionSerializer = z.object({
  email: z
    .string()
    .email()
    .max(127, "Maximum characters allowed for email is 127"),
  password: z
    .string()
    .max(127, "Maximum characters allowed for password is 127"),
});
