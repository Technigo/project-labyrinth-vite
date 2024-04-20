import { create } from "zustand";

export const useLabyrinthStore = create((set) => ({
  userName: "",

  setUserName: (newUserName) => set({ userName: newUserName }),

  fetchStart: async (userName) => {
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
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
