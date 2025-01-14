import { z } from "zod";
import { passwordSchema } from "./password";

export const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: passwordSchema,
  confirmPassword: passwordSchema,
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 characters"),
  address: z.string().min(1, "Address is required"),
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;
