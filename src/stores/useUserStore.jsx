import { create } from "zustand";

export const useUserStore = create((set) => ({
  userName: "",
  loading: false,
  start: {},
  actions: [],
  coordinates: null,
  description: null,
  loggedIn: false,
  direction: "",
  error: null,

  setUserName: (userInput) => set({ userName: userInput }),
  setDirection: (chooseDirection) => set({ direction: chooseDirection }),

  fetchGameStart: async (userName) => {
    set({ loading: true, error: false, loggedIn: false });

    try {
      const response = await fetch("https://labyrinth.technigo.io/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: userName }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error response:", errorData);

        throw new Error(
          errorData.message ||
            "The Labyrinth didn't open. Perhaps you need to reload to make it happen"
        );
      }

      const data = await response.json();
      console.log("Data from fetchGameStart:", data);

      set({
        userName: userName,
        start: data,
        loggedIn: true,
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

  moveDirection: async (userName, direction) => {
    set({ loading: true, error: false });

    console.log(`Moving direction: ${direction} for user: ${userName}`); // Add log here

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
        const errorData = await response.json();
        console.error("Server error response:", errorData);

        throw new Error(
          errorData.message ||
            "The Labyrinth can be unpredictable. Sometimes you need to set your intention right. Update page to enter again."
        );
      }

      const data = await response.json();
      console.log("Data from moveDirection:", data);

      set({
        coordinates: data.coordinates,
        description: data.description,
        actions: data.actions,
      });
    } catch (error) {
      console.error("Error in moveDirection:", error);
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  restart: () => {
    set({ userName: "", loggedIn: false });
  },
}));
