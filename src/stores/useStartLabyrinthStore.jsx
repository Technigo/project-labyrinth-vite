import { create } from "zustand";

export const useStartLabyrinthStore = create((set) => ({
  loading: false,
  gameFlow: false,
  start: {},
  userName: "",
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
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      set({ loading: false });
    }
  },
}));
