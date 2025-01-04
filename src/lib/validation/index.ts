import * as z from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Too short" }),
  username: z
    .string()
    .min(2, { message: "Too short" })
    .max(30, { message: "Too Long" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, {
      message: "Password must be in range of 8 to 30 charcters/numbers",
    })
    .max(30, {
      message: "Password must be in range of 8 to 30 charcters/numbers",
    }),
});
