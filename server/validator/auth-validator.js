const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast of 3 chars." })
    .max(100),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Please enter a valid email address." }),
  phone: z
    .string({ required_error: "Phone Number is required" })
    .trim()
    .min(10, { message: "Phone number must be of 10 chars." })
    .max(20),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "Password should contain at least 8 characters." }),
});

module.exports = signupSchema;
