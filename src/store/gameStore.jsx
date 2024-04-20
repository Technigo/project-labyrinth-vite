import { create } from "zustand";

const useGameStore = create((set) => ({
  username: "",
  userId: 46578909,
  gameState: null,
  loading: false,
  error: null,

  setUsername: (newUsername) => set({ username: newUsername }),

  startGame: async ({ username, userId }) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`https://labyrinth.technigo.io/start`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: `${username}_${userId}` }),
        // Access username from current state
      });
      if (!response.ok) {
        throw new Error("Failed to start the game");
      }
      const gameState = await response.json();
      set({ gameState }); // Update game data
      console.log("Game started successfully:", gameState);
    } catch (error) {
      set({ error: error });
      console.error("Error fetching game data:", error);
    } finally {
      set({ loading: false }); // Set loading state to false
    }
  },
  /*   performAction: async (action) => {
    set({ loading: true }); // Set loading state to true
    try {
      const response = await fetch("https://labyrinth.technigo.io/action", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: set((state) => state.username),
          type: action.type,
          direction: action.direction,
        }),
      });
      const newData = await response.json();
      set({ gameData: newData }); // Update game data
    } catch (error) {
      set({ error });
      console.error("Error performing action:", error);
    } finally {
      set({ loading: false }); // Set loading state to false
    }
  }, */
}));

export default useGameStore;
