import { create } from "zustand";

export const useLabyrinthStore = create(set => ({
  userName: null,
  loading: false,
  coordinates: null,
  description: null,
  actions: null,
  error: null,
  addUserName: name => {
    set({ userName: name });
  },
  startGame: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch("https://labyrinth.technigo.io/start");
      if (!response.ok) {
        throw new Error("Fetching error");
      }
      const data = await response.json();
      console.log(data);
      set({
        coordinates: data.coordinates,
        description: data.description,
        actions: data.actions,
      });
    } catch (error) {
      console.log("Error: ", error);
      set({ error: error });
    } finally {
      set({ loading: false });
    }
  },
}));
