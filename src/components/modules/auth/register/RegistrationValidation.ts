import { z } from "zod";

export const RegistrationSchema = z.object({
  email: z
    .email("Invalid email address")
    .min(1,"Email is required!"),
  password: z
    .string("Password is required")
    .min(8, "Password must be at least 8 characters"),
  passwordConfirm: z
    .string("Password Confirmation is required")
    .min(8, "Password must be at least 8 characters"),
});
