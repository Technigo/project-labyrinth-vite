import { create } from "zustand";

export const useLabyrinthStore = create((set) => ({
  // Defining the initial states
  userName: null,
  loading: false,
  error: null,
  coordinates: null,
  description: null,
  actions: [],

  fetchStartData: async () => {
    //optimistic coding, set error to null, because not expecting error
    set({ loading: true, error: null });
    try {
      const response = await fetch("https://labyrinth.technigo.io/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "hejohå",
        }),
      });

      if (!response.ok) {
        throw new Error("Fetching of labyrinth didn't work");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error", error);
      set({ error: error });
    } finally {
      set({ loading: false });
    }
  },
}));
