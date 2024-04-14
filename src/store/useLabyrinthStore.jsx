import { create } from "zustand";

export const useLabyrinthStore = create((set) => ({
  apiData: {},
  username: "",
  loading: false,

  startGame: async (userData) => {
    set({ loading: true });
    try {
      const response = await fetch("https://labyrinth.technigo.io/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: userData }),
      });
      if (!response.ok) {
        throw new Error("Failed to post username");
      }
      const data = await response.json();
      set({ apiData: data, username: userData });
    } catch (error) {
      console.error("Error adding new player", error);
    } finally {
      set({ loading: false });
    }
  },

  
}));
