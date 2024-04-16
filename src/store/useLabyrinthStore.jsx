import { create } from "zustand";

export const useLabyrinthStore = create((set) => ({
  username: null,
  coordinates: null,
  description: null,
  actions: null,

  updateUsername: (newUsername) => {
    set({ username: newUsername });
  },
  updateCoordinates: (newCoordinates) => {
    set({ coordinates: newCoordinates });
  },
  updateDescription: (newDescription) => {
    set({ description: newDescription });
  },
  updateActions: (newActions) => {
    set({ actions: newActions });
  },
}));
