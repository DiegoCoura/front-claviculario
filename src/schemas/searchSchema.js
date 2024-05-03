import { z } from "zod";

export const searchSchema = z.object({
  room: z
    .string({
      required_error: "Inserir a sala",
    })
    .min(1)
    .toLowerCase()
    .refine((str) => !str.includes(" "), "Não deve conter espaços"),
});
