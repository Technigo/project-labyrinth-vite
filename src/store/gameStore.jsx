import { create } from "zustand";

export const useGameStore = create((set, get) => ({
  username: null,
  loading: false,
  coordinates: null,
  description: null,
  actions: null,
  error: null,
  isLoggedIn: false,

  startGame: async ({ playerName }) => {
    console.log("Starting game with player:", playerName);
    const uniqueName = `${playerName}_${Date.now()}`;
    set({ loading: true, error: null });
    try {
      const response = await fetch(`https://labyrinth.technigo.io/start`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: uniqueName }),
        // Access username from current state
      });
      if (!response.ok) {
        throw new Error("Failed to start the game");
      }

      const data = await response.json();
      console.log("Game started with data:", data);

      set({
        username: uniqueName,
        coordinates: data.coordinates,
        description: data.description,
        actions: data.actions,
        isLoggedIn: true,
      }); // Update game data

      console.log("Game started successfully:", data);
    } catch (error) {
      set({ error: error });
    } finally {
      set({ loading: false }); // Set loading state to false
    }
  },
  performAction: async (direction) => {
    set({ loading: true, error: null }); // Set loading state to true
    try {
      const response = await fetch("https://labyrinth.technigo.io/action", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: get().username,
          type: "move",
          direction: direction,
        }),
      });
      if (!response.ok) {
        throw new Error("Movement fails...");
      }
      const data = await response.json();
      set({
        coordinates: data.coordinates,
        description: data.description,
        actions: data.actions,
      }); // Update game data
    } catch (error) {
      set({ error });
      console.error("Error performing action:", error);
    } finally {
      set({ loading: false }); // Set loading state to false
    }
  },
  restart: () => {
    console.log("Restarting game"); // Debug log
    set({
      isLoggedIn: false,
    });
  },
}));

export default useGameStore;
