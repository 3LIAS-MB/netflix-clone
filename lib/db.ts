import { PrismaClient } from "@prisma/client";

// Extender el tipo para incluir más propiedades
const globalForPrisma = globalThis as unknown as {
  // Definimos que esta variable tendrá una
  // propiedad `prisma` del tipo `PrismaClient`
  prisma: PrismaClient;
};

export const db = globalForPrisma.prisma || new PrismaClient();

// En un entorno que no sea producción, guardamos la
// instancia de PrismaClient en `globalForPrisma.prisma`

// Esto asegura que solo haya una instancia de PrismaClient durante el
// desarrollo, evitando errores como demasiadas conexiones a la base de datos
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
