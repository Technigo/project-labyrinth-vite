import { create } from "zustand";

export const useLabyrinthStore = create((set) => ({
  apiData: {},
  username: "",
  loading: false,
  actions: [],
  locationDescription: "",
  coordinates: "",
  isHidden: true,

  toggleHidden: () => set((state) => ({ isHidden: !state.isHidden })),

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
      set({
        apiData: data,
        username: userData,
        locationDescription: data.description,
        actions: data.actions,
        coordinates: data.coordinates,
      });
    } catch (error) {
      console.error("Error adding new player", error);
    } finally {
      set({ loading: false });
    }
  },

  nextMove: async (username, moveDirection) => {
    set({ loading: true });
    try {
      const response = await fetch("https://labyrinth.technigo.io/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          type: "move",
          direction: moveDirection,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to move");
      }
      const data = await response.json();
      set({
        apiData: data,
        locationDescription: data.description,
        actions: data.actions,
        coordinates: data.coordinates,
        isHidden: true,
      });
    } catch (error) {
      console.error("Error when trying to move", error);
    } finally {
      set({ loading: false });
    }
  },
}));
