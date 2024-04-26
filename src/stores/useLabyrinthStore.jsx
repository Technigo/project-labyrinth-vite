import { create } from "zustand";

export const useLabyrinthStore = create((set, get) => ({
  loading: false,
  gameData: false,
  start: {},
  userName: "",
  actions: [],
  description: "",
  coordinates: "",
  direction: "",

  setUserName: (userInput) => set({ userName: userInput }),
  setDirection: (userDirection) => set({ direction: userDirection }),

  fetchStart: async (userName) => {
    set({ loading: true });
    set({ gameData: false });

    try {
      const response = await fetch("https://labyrinth.technigo.io/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userName,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to start the maze. Please reload the page.");
      }

      const data = await response.json();
      console.log("Data from the fetch:", data);
      set({ start: data });
      set({ gameData: true });
      set({ actions: data.actions });
      set({ description: data.description });
      set({ coordinates: data.coordinates });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      set({ loading: false });
    }
  },

  fetchMove: async (direction) => {
    set({ loading: true });
    set({ gameData: true });

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
          "Failed to continue your adventure. Please reload the page."
        );
      }

      const data = await response.json();
      set({ actions: data.actions });
      set({ description: data.description });
      set({ coordinates: data.coordinates });
      console.log("Data from the second fetch:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      set({ loading: false });
    }
  },
}));
