"use server";

import { signIn } from "@/auth";
import { signInSchema } from "@/lib/zod";
import { AuthError } from "next-auth";
import { z } from "zod";

// "z.infer" es una utilidad de Zod que se utiliza para
// inferir el tipo TypeScript de un esquema definido con Zod
export const login = async (values: z.infer<typeof signInSchema>) => {
  //`safeParse` devuelve un objeto "{ success: true }"
  // que indica si la validación fue exitosa o no
  const validatedFields = signInSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;

  try {
    // El método "credentials" se utiliza para indicar que se está autenticando con
    // email y contraseña. Es el método de autenticación predeterminado.
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/profiles",
    });
    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };

        default:
          return { error: "Something went wr  ong!" };
      }
    }
  }
};
