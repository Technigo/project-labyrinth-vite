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
      const startApi = "https://labyrinth.technigo.io/start";
      const response = await fetch(startApi, {
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
      set({ currentRoom: data, isLoading: false, username });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  performAction: async (username, action) => {
    try {
      set({ isLoading: true });
      const actionApi = "https://labyrinth.technigo.io/action";
      const response = await fetch(actionApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          type: "move",
          direction: action.direction,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to perform action.");
      }

      const newData = await response.json();
      set({ currentRoom: newData });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useLabyrinthStore;
