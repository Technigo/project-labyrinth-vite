import { create } from "zustand";

export const useLabyrinthStore = create((set, get) => ({
  loading: false,
  gameFlow: false,
  start: {},
  userName: "",
  actions: [],
  description: "",

  setUserName: (userInput) => set({ userName: userInput }),

  fetchStart: async (userName) => {
    set({ loading: true });
    set({ gameFlow: false });

    try {
      const response = await fetch("https://labyrinth.technigo.io/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userName,
        }),
      });

      if (!response.ok) {
        throw new Error(
          "Failed to Start your adventure. Please reload the page."
        );
      }

      const data = await response.json();
      console.log("Data from the fetch:", data);
      set({ start: data });
      set({ gameFlow: true });
      set({ actions: data.actions });
      set({ description: data.description });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      set({ loading: false });
    }
  },

  fetchMove: async (/* userName, */ direction) => {
    set({ loading: true });
    set({ gameFlow: true });

    try {
      const response = await fetch("https://labyrinth.technigo.io/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: get().userName,
          type: "move",
          direction: direction,
        }),
      });

      if (!response.ok) {
        throw new Error(
          "Failed to Start your adventure. Please reload the page."
        );
      }

      const data = await response.json();
      console.log("Data from the second fetch:", data);
      set({ actions: data.actions });
      set({ description: data.description });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      set({ loading: false });
    }
  },
}));
