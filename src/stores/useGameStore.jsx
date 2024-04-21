import { create } from "zustand";

export const useGameStore = create((set, get) => ({
  username: "John Doe",
  uniqueName: "JohnDoe12312481749",
  action: "move", // No other action allowed.
  actions: null,
  coordinates: null,
  count: 0,
  isStarted: false,
  labData: {},
  isLoading: false,

  setUserName: (newUsername) => set({ username: newUsername }),
  setIsStarted: (newValue) => set({ isStarted: newValue }),

  startGame: (username, uniqueName) => {
    uniqueName = username + Date.now();
    set({ isLoading: true });
    fetch("https://labyrinth.technigo.io/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({ username: uniqueName }),
    })
      .then((response) => response.json())
      .then((data) => {
        set({
          uniqueName: uniqueName,
          labData: data,
          coordinates: data.coordinates,
          isLoading: false,
          isStarted: true,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },

  makeMove: (uniqueName, action, direction) => {
    set({ isLoading: true });
    fetch("https://labyrinth.technigo.io/action", {
      method: "POST", 
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        username: get().uniqueName, 
        type: action,
        direction: direction,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        set({
          labData: data,
          isLoading: false,
          coordinates: data.coordinates,
          actions: data.actions,
          description: data.description,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },
}));
