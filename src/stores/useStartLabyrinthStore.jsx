import { create } from "zustand";

export const useStartLabyrinthStore = create((set) => ({
  loading: false,
  start: [],
  setUserName: (userInput) => set({ userName: userInput }),
  fetchStart: async () => {
    set({ loading: true });

    try {
      const response = await fetch("https://labyrinth.technigo.io/start", {
        method: "POST",
        body: JSON.stringify({
          username: "TestyTesty240416",
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(
          "Failed to Start your adventure. Please reload the page."
        );
      }

      const data = await response.json();
      console.log("Data from the fetch:", data);
      set({ start: data });
    } catch (error) {
      console.Error("Error fetching data:", error);
    } finally {
      set({ loading: false });
    }
  },
}));
