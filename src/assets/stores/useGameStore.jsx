import create from "zustand";

export const useGameStore = create((set) => ({
  setUsername: (username) => set({ username }), 
  description: "",
  actions: [],
  loading: false,
  setDescription: (description) => set({ description }),
  setActions: (actions) => set({ actions }),
  setLoading: (loading) => set({ loading }),
}));
