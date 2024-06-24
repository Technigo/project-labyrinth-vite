import { create } from "zustand";
import axios from "axios";

const initialState = {
  coordinates: "0,0",
  description: "You find yourself under a large archway opening into a cavern. A sense of purpose fills you.",
  actions: [
    {
      type: "move",
      direction: "East",
      description: "You see a worn sign that says 'The Temple of echigo'. Some of the letters are missing. An overgrown paved path leads to the East"
    }
  ]
};

const storeData = (set, get) => ({
  logindata: { isLoggedIn: false, username: "" },
  gamedata: initialState,
  isLoggedIn: () => get().logindata.isLoggedIn,
  username: () => get().logindata.username,
  startGame: async (username) => {
    try {
      const response = await axios.post("https://labyrinth.technigo.io/start", { username });
      set({ logindata: { isLoggedIn: true, username }, gamedata: response.data });
    } catch (error) {
      console.error("Failed to start game:", error);
    }
  },
  sendAction: async (username, type, direction) => {
    try {
      const response = await axios.post("https://labyrinth.technigo.io/action", { username, type, direction });
      set({ gamedata: response.data });
    } catch (error) {
      console.error("Failed to send action:", error);
    }
  },
});

export const useGlobalStoreData = create(storeData);
