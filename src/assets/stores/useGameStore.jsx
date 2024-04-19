import { create } from "zustand";

export const useGameStore = create((set, get) => ({
  description: "",
  actions: [],
  coordinates: "",
  loading: false,
  gameStarted: false,

  // Setter functions
  setLoading: (loading) => set({ loading }),
  setDescription: (description) => set({ description }),
  setActions: (actions) => set({ actions }),
  setGameStarted: (started) => set({ gameStarted: started }),
  setCoordinates: (coordinates) => set({ coordinates }),

  // Async action to perform game moves
  performAction: async (type, direction) => {
    get().setLoading(true);
    try {
      const response = await fetch("https://labyrinth.technigo.io/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "TechnigoPlayer",
          type,
          direction,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Updating state with:", data);

      set({
        description: data.description,
        actions: data.actions,
        coordinates: data.coordinates,
        loading: false,
      });
    } catch (error) {
      console.error("Error handling action:", error);
      get().setLoading(false); // Ensure to use get() for consistency
    }
  },

  // Reset game to initial state
  resetGame: () => {
    set({
      description: "",
      actions: [],
      coordinates: "",
      loading: false,
      gameStarted: false,
    });
  },
}));
