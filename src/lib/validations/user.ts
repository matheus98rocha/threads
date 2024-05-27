import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().min(1),
  name: z
    .string()
    .min(3, { message: "Nome deve ter no mínimo 3 caracteres" })
    .max(30, { message: "Nome deve ter no máximo 30 caracteres" }),
  username: z
    .string()
    .min(3, { message: "Seu username deve ter no mínimo 3 caracteres" })
    .max(30, { message: "Seu username deve ter no máximo 30 caracteres" }),
  bio: z
    .string()
    .min(3, { message: "Sua Bio deve ter no mínimo 3 caracteres" })
    .max(1000, { message: "Sua Bio deve ter no máximo 1000 caracteres" }),
});
