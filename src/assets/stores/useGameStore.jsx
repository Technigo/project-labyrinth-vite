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
      get().setDescription(data.description);
      get().setActions(data.actions);
      get().setCoordinates(data.coordinates); 
    } catch (error) {
      console.error("Error handling action:", error);
    } finally {
      get().setLoading(false); 
    }
  },

  // Reset game to initial state
  resetGame: () => {
    set({
      coordinates: "",
      actions: [],
      description: "", 
      loading: false, 
    });
  },
}));
