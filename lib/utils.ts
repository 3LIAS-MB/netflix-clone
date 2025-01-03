// 'clsx' es una biblioteca que permite combinar y condicionar clases CSS de manera sencilla.
// Es un tipo exportado por clsx que describe las entradas válidas para la función: string, array, objeto, etc.
import { clsx, type ClassValue } from "clsx";
// Es una biblioteca que extiende clsx y está diseñada para trabajar con Tailwind CSS.
// Combina clases y elimina duplicados o conflictos
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
