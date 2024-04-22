import { create } from "zustand";

export const useAppContentStore = create((set, get) => ({
  username: "",
  loadingGameData: false,
  loadingDirection: false,
  gameData: {},
  error: null,
  showDirections: false,
  setUsername: (username) => set({ username }),
  setGameData: (data) => set({ gameData: data }),
  setError: (error) => set({ error }),
  clearError: () => set({ error: null }),
  toggleDirections: () =>
    set((state) => ({ showDirections: !state.showDirections })),

  fetchGameData: async (username) => {
    console.log("Fetching game data for username:", username);
    set({ loadingGameData: true, error: null });
    try {
      const response = await fetch("https://labyrinth.technigo.io/start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });
      console.log("Response status:", response.status);
      const data = await response.json();
      console.log("Received game data:", data);
      set({ username, gameData: data });
    } catch (error) {
      console.error("Error fetching game data:", error);
      set({ error: "Error fetching game data" });
    } finally {
      set({ loadingGameData: false });
    }
  },

  fetchDirection: async (type, direction) => {
    set({ loadingDirection: true, error: null });
    try {
      const response = await fetch("https://labyrinth.technigo.io/action", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: get().username, type, direction }),
      });
      const newData = await response.json();
      set({
        gameData: {
          coordinates: newData.coordinates,
          description: newData.description,
          actions: newData.actions,
        },
      });
    } catch (error) {
      set({ error: "Error fetching game direction" });
      console.error("Error fetching game direction:", error);
    } finally {
      set({ loadingDirection: false });
    }
  },
}));
