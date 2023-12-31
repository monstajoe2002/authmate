import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "This field is required",
  }),
  password: z.string().min(1, {
    message: "This field is required",
  }),
});
