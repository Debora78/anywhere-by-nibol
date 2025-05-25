import { create } from "zustand"; // Importa la funzione principale di Zustand

// Definizione del tipo di  stato utente
interface UserState {
  user: null | {
    name: string;
    email: string;
  };
  setUser: (user: { name: string; email: string }) => void;
  clearUser: () => void;
}

// Crea lo store utente con Zustand
export const useUserStore = create<UserState>((set) => ({
  user: null, // Stato iniziale: nessun utente loggato

  // Funzione per salvare l'utente dopo il login
  setUser: (user) => set({ user }), // Imposta i dati utente

  // Funzione per cancellare i dati utente (logout)
  clearUser: () => set({ user: null }), // Reset (logout)
}));
