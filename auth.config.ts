// Importamos el tipo `NextAuthConfig` para garantizar que el
// objeto de configuración siga la estructura requerida por NextAuth.
import type { NextAuthConfig } from "next-auth";
// Importamos el proveedor de autenticación
// basado en credenciales (usuario/contraseña).
import Credentials from "next-auth/providers/credentials";
// Importamos una función personalizada que busca un usuario
// en la base de datos usando su correo electrónico.
import { getUserByEmail } from "./data/user";
// Importamos `bcryptjs` para comparar contraseñas encriptadas
// almacenadas en la base de datos con las ingresadas por el usuario.
import bcryptjs from "bcryptjs";
// Importamos un esquema de validación definido
// con Zod para validar los datos ingresados por el usuario.
import { signInSchema } from "./lib/zod";

export default {
  // Lista de proveedores de autenticación. En este caso solo se  usa el proveedor de credenciales.
  // Este proveedor permite a los usuarios iniciar sesión con un correo electrónico y una contraseña.
  providers: [
    Credentials({
      async authorize(credentials) {
        // Validamos los campos ingresados por el usuario.
        const validatedFields = signInSchema.safeParse(credentials);

        if (!validatedFields.success) {
          return null;
        }

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          const user = await getUserByEmail(email);

          if (!user || !user.password) return null;

          const passwordsMatch = await bcryptjs.compare(
            password,
            user.password
          );
          if (passwordsMatch) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
