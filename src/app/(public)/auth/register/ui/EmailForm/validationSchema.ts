import { z } from "zod";

export const emailSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email(),
});

export type EmailFormValue = z.infer<typeof emailSchema>;
