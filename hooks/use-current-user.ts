// Se utiliza para crear un estado global. En este caso
// se utiliza para guardar el usuario actual de Netflix.
import { create } from "zustand";
// Permiten la persistencia de datos en almacenamiento local o de sesión.
import { persist, createJSONStorage } from "zustand/middleware";
import { UserNetflix } from "@prisma/client";

// Define la estructura del estado global
interface UseCurrentUser {
  currentUser: UserNetflix | null;
  changeCurrentUser: (data: UserNetflix) => void;
}

export const useCurrentNetflixUser = create(
  // 'persist' habilita la persistencia del estado en el almacenamiento
  //  especificado. En este caso, se utiliza sessionStorage.
  persist<UseCurrentUser>(
    (set) => ({
      currentUser: null,
      changeCurrentUser: (data: UserNetflix) => {
        set({ currentUser: data });
      },
    }),
    {
      // Nombre clave para identificar los datos guardados
      name: "current-netflix-user",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
