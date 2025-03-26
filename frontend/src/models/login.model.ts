import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("El correo no es valido"),
  password: z.string().min(1, "La contraseña es necesaria"),
});

export type LoginFormData = z.infer<typeof loginSchema>;