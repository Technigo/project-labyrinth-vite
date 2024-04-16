// use state is for local component and zuustand is for global component

import { create } from "zustand";

export const useGameStateStore = create((set) => ({
  username: "",
  // here we are declaring the loading after pressing button
  loading: false,
  gameState: undefined,

  restart: () => {
    set({ gameState: undefined });
  },

  start: (username) => {
    set({ username });
    fetch("https://labyrinth.technigo.io/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
      .then((res) => res.json())
      .then((res) => {
        set({ gameState: res });
      });
  },

  move: (direction) => {
    set({ loading: true });
    const username = useGameStateStore.getState().username;
    fetch("https://labyrinth.technigo.io/action", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // https://www.w3schools.com/whatis/whatis_json.asp
      body: JSON.stringify({
        username,
        type: "move",
        direction,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        set({ gameState: res, loading: false });
      });
  },
}));
