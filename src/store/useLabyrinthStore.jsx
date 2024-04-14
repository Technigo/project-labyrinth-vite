import { create } from "zustand";

export const useLabyrinthStore = create((set) => ({
  username: "",
  description: "",
  setNewUser: (value) => {
    set({ username: value });
  },
  startGame: async (userData) => {
    try {
      const response = await fetch("https://labyrinth.technigo.io/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: userData }),
      });
      if (!response.ok) {
        throw new Error("Failed to post username");
      }
      const descriptionRes = await response.json();
      set({ description: descriptionRes });
    } catch (error) {
      console.error("Error adding new player", error);
    }
  },
}));
