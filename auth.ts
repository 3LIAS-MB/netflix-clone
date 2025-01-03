// Es el módulo principal para configurar la autenticación en tu proyecto Next.js.
// Aquí es donde se configuran las opciones de autenticación y se exportan los
// controladores de autenticación y las rutas de autenticación.
// También se exporta el objeto auth que contiene las opciones de autenticación.
import NextAuth from "next-auth";
// Es un adaptador que permite a NextAuth
// interactuar con tu base de datos mediante Prisma.
import { PrismaAdapter } from "@auth/prisma-adapter";
// Es la instancia de PrismaClient que se conecta a
// tu base de datos (configurada previamente en lib/db
import { db } from "@/lib/db";
import authConfig from "./auth.config";

// handlers: Son los controladores para manejar las rutas de autenticación, como /api/auth/signin o /api/auth/signout.
// signIn y signOut: Métodos que puedes usar para iniciar o cerrar sesión programáticamente desde el cliente.
// auth: Una utilidad que proporciona acceso directo a las configuraciones y funciones de NextAuth.
export const { handlers, signIn, signOut, auth } = NextAuth({
  // le estamos diciendo a NextAuth que use tu base de datos configurada con
  // Prisma para manejar toda la información relacionada con la
  // autenticación usuario, cuentas, sesiones, etc.
  adapter: PrismaAdapter(db),

  // Los callbacks permiten personalizar cómo se
  // gestionan los tokens, las sesiones y otros eventos.
  callbacks: {
    // Se ejecuta cuando se crea una sesión de usuario.
    async session({ token, session }) {
      if (token.sub && session.user) {
        // Almacenamos el ID del usuario en la sesión para poder acceder a él más adelante.
        // Esto es útil para personalizar la interfaz de usuario o realizar consultas a la base de datos.
        // Por ejemplo, en la página de inicio, podemos mostrar solo las películas que el usuario ha marcado como favoritas.
        session.user.id = token.sub;
      }

      return session;
    },

    // Personaliza el token JWT generado por NextAuth. En este caso no se realizan
    // cambios adicionales y simplemente se devuelve el token tal como está.
    async jwt({ token }) {
      return token;
    },
  },

  // Especifica que las sesiones deben gestionarse con JWT (JSON Web Tokens) en lugar de
  // almacenarse en la base de datos. Esto hace que la autenticación sea stateless,
  // es decir, no se requiere una tabla Session.
  session: { strategy: "jwt" },

  // Incluye configuraciones adicionales definidas en el archivo
  // Es probable que aquí se definan los proveedores de autenticación,
  // como Google, GitHub, o credenciales personalizadas.
  ...authConfig,
});
