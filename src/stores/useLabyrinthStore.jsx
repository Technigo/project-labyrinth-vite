import { create } from "zustand";

export const useLabyrinthStore = create(set => ({
  userName: null,
  loading: false,
  coordinates: null,
  description: null,
  actions: null,
  error: null,
  loggedIn: false,
  // addUserName: name => {
  //   set({ userName: name });
  // },
  startGame: async name => {
    set({ loading: true, error: null, userName: name });
    try {
      const response = await fetch("https://labyrinth.technigo.io/start", {
        method: "POST",
        body: JSON.stringify({ username: name }),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Fetching error");
      }
      const data = await response.json();
      console.log(data);
      set({
        coordinates: data.coordinates,
        description: data.description,
        actions: data.actions,
        loggedIn: true,
      });
    } catch (error) {
      console.log("Error: ", error);
      set({ error: error });
    } finally {
      set({ loading: false });
    }
  },
}));
