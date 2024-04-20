
import { create } from "zustand";

export const useGameStore = create((set, get) => ({
  description: "",
  actions: [],
  coordinates: "",
  loading: false,
  gameStarted: false,
  username: "DefaultPlayer",

  // Setter functions
  setUsername: (username) => set({ username }),
  setLoading: (loading) => set({ loading }),
  setDescription: (description) => set({ description }),
  setActions: (actions) => set({ actions }),
  setGameStarted: (started) => set({ gameStarted: started }),
  setCoordinates: (coordinates) => set({ coordinates }),

  // Async action to perform game moves
  performAction: async (type, direction) => {
    const username = get().username; 
    console.log(username);
    if (!username || !type || !direction) {
      console.error("Missing required parameters:", {
        username,
        type,
        direction,
      });
      return;
    }

    const requestBody = { username, type, direction };
    console.log("Sending request with body:", JSON.stringify(requestBody));

    set({ loading: true });
    try {
      const response = await fetch("https://labyrinth.technigo.io/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      console.log("Response status:", response.status); // Detailed log of the response status

      if (!response.ok) {
        const errorText = await response.text(); // Get the error message from response
        console.error("Error in response:", errorText);

        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Received data:", data);

      set({ ...data, loading: false });
    } catch (error) {
      console.log("Error handling action:", error.message);
      set({ loading: false });
    }
  },
  resetGame: () => {
  console.log(123);
    set({
      description: "",
      actions: [],
      coordinates: "",
      loading: false,
      gameStarted: false,
    })
  }

}));
