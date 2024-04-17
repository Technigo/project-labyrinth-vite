import { create } from "zustand";

export const useGameStore = create((set) => ({
  gameStarted: false,
  description: "",
  actions: [],
  setLoading: (loading) => set({ loading }),
  setDescription: (description) => set({ description }),
  setActions: (actions) => set({ actions }),
  setGameStarted: (gameStarted) => set({ gameStarted }),
  updateGame: (data) =>
    set({ description: data.description, actions: data.actions }),
}));
