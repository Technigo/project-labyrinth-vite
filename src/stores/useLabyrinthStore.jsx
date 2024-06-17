import { create } from "zustand";

const useLabyrinthStore = create((set, get) => ({
  loading: false,
  loggedIn: false,
  userName: null,
  coordinates: null,
  description: null,
  actions: [],
  error: null,

  startGame: async (username) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch("https://labyrinth.technigo.io/start", {
        method: "POST",
        body: JSON.stringify({ username }),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Failed to start game");
      }
      const data = await response.json();
      set({
        loading: false,
        loggedIn: true,
        userName: username,
        coordinates: data.coordinates,
        description: data.description,
        actions: data.actions,
      });
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },

  performAction: async (type, direction) => {
    const { userName } = get();
    if (!userName) return;
    set({ loading: true, error: null });
    try {
      const response = await fetch("https://labyrinth.technigo.io/action", {
        method: "POST",
        body: JSON.stringify({ username: userName, type, direction }),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Failed to perform action");
      }
      const data = await response.json();
      set({
        loading: false,
        coordinates: data.coordinates,
        description: data.description,
        actions: data.actions,
      });
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },

  restart: () => {
    set({
      loggedIn: false,
      userName: null,
      coordinates: null,
      description: null,
      actions: [],
    });
  },
}));

export default useLabyrinthStore;

