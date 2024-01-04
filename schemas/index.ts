import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "This field is required",
  }),
  password: z.string().min(1, {
    message: "This field is required",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "This field is required",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
  name: z.string().min(1, {
    message: "This field is required",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "This field is required",
  }),
});
export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});
