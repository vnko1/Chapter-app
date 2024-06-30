import { z } from "zod";

export const OTPSchema = z.object({
  otp: z
    .string({
      required_error: "Otp is required",
    })
    .min(4),
});

export type OTPFormValue = z.infer<typeof OTPSchema>;
