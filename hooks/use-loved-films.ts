import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Movie } from "@prisma/client";
import { toast } from "./use-toast";
import { useCurrentNetflixUser } from "./use-current-user";

interface UseAddFilmMyList {
  lovedFilmsByUser: { [userId: string]: Movie[] };
  addLovedFilm: (data: Movie) => void;
  removeLovedItem: (id: string) => void;
}

export const useLovedFilms = create(
  persist<UseAddFilmMyList>(
    // 'get' y 'set' se usa dentro de la función de configuración de la tienda (create()),
    // donde defines cómo se maneja el estado y las acciones. Permite acceder al
    // estado actual directamente, sin depender de un hook ni del contexto de React.
    (set, get) => ({
      lovedFilmsByUser: {},

      addLovedFilm: (data: Movie) => {
        const { currentUser } = useCurrentNetflixUser.getState();

        if (!currentUser) {
          return toast({
            title: "Ningún usuario seleccionado 🙋‍♂️",
          });
        }

        const currentLovedItems = get().lovedFilmsByUser[currentUser.id] || [];
        const existingItem = currentLovedItems.find(
          (item: Movie) => item.id === data.id
        );

        if (existingItem) {
          return toast({
            title: "La película ya está en tu lista 😊",
            variant: "destructive",
          });
        }

        set({
          lovedFilmsByUser: {
            // Obtiene el estado actual de lovedFilmsByUser
            ...get().lovedFilmsByUser,
            // Actualiza el estado de lovedFilmsByUser con la nueva película
            [currentUser.id]: [...currentLovedItems, data],
          },
        });

        toast({
          title: "Película añadida a tu lista 🚀",
        });
      },

      removeLovedItem: (id: string) => {
        const { currentUser } = useCurrentNetflixUser.getState();

        if (!currentUser) {
          return toast({
            title: "Ningún usuario seleccionado 🙋‍♂️",
            variant: "destructive",
          });
        }

        const currentLovedItems = get().lovedFilmsByUser[currentUser.id] || [];

        set({
          lovedFilmsByUser: {
            ...get().lovedFilmsByUser,
            [currentUser.id]: currentLovedItems.filter(
              (item) => item.id !== id
            ),
          },
        });

        toast({
          title: "La película ha sido eliminada de tu lista 😢",
        });
      },
    }),
    {
      name: "add-loved-films-by-user",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
