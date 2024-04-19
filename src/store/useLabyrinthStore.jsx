import { create } from "zustand";

const useLabyrinthStore = create((set) => ({
  username: null,
  currentRoom: null,
  isLoading: false,
  error: null,
  setUsername: (username) => set({ username }),
  setCurrentRoom: (room) => set({ currentRoom: room }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  startGame: async (username) => {
    try {
      set({ isLoading: true });
      const response = await fetch("https://labyrinth.technigo.io/start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });
      if (!response.ok) {
        throw new Error("Failed to start game.");
      }
      const data = await response.json();
      set({ currentRoom: data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useLabyrinthStore;
