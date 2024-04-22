import { create } from "zustand";

export const useLabyrinthStore = create((set) => ({
  userName: "",
  loading: false,
  error: null,
  actions: [],
  coordinates: null,
  description: null,
  gameMode: false,
  direction: "",
  setUserName: (userInput) => set({ userName: userInput }),
  setDirection: (userDirection) => set({ direction: userDirection }),

  fetchStart: async (userName) => {
    set({ loading: true, error: false, gameMode: false });

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
          "Failed to step into the Labyrinth. Please reload and try again."
        );
      }

      const data = await response.json();
      console.log("Data from the fetch:", data);
      set({
        username: userName,
        gameMode: true,
        coordinates: data.coordinates || null,
        description: data.description,
        actions: data.actions,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      set({ error: error });
    } finally {
      set({ loading: false });
    }
  },

  fetchMove: async (userName, direction) => {
    set({ loading: true, error: false });

    try {
      const response = await fetch("https://labyrinth.technigo.io/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userName,
          type: "move",
          direction: direction,
        }),
      });

      if (!response.ok) {
        throw new Error(
          "Failed to step further into the labyrinth. Please reload and try again."
        );
      }

      const data = await response.json();
      console.log("Data from the second fetch:", data);

      // Update the start object in the store with the new data
      set({
        coordinates: data.coordinates,
        description: data.description,
        actions: data.actions,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      set({ error: error });
    } finally {
      set({ loading: false });
    }
  },

  restart: () => {
    set({ userName: "", gameMode: false });
  },
}));
