import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(8, "Password should be at least 8 characters")
  .max(30, "Password should be at most 30 characters")
  .refine((value) => /[A-Z]/.test(value), {
    message: "Password must contain at least one uppercase letter",
  })
  .refine((value) => /[a-z]/.test(value), {
    message: "Password must contain at least one lowercase letter",
  })
  .refine((value) => /[0-9]/.test(value), {
    message: "Password must contain at least one number",
  })
  .refine((value) => /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/.test(value), {
    message: "Password must contain at least one special character",
  });

export type PasswordSchemaType = z.infer<typeof passwordSchema>;
