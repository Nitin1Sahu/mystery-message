import { z } from "zod";
export const usernameValidation = z
  .string()
  .min(3, "Username must be atleast 2 characters")
  .max(20, "Username must be no more than 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain Special characters");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid Email Address!!!" }),
  password: z
    .string()
    .min(10, { message: "Password must be 10 character long." })
    .max(30, "Password must not be more than 30 character long."),
});
