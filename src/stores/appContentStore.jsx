/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { create } from "zustand";

export const appContentStore = create((set) => ({
  // username from input
  username: "",
  //   data from api
  gameData: {},
  progress: 0,
  //   function to set username the username variable
  setUsername: (username) => set({ username }),
  //   function to set gameData the value of data
  setGameData: (data) => set({ gameData: data }),
  //   function to set the progress , initial value it's 0
  setProgress: (progress) => set({ progress }),

  //   function to increase the progress of +1 - to connect to the onclick of the directions
  increaseProgress: () => set((state) => ({ progress: state.progress + 1 })),
  //   function to get the data and passing username as parameter
  fetchGameData: async (username) => {
    const response = await fetch("https://labyrinth.technigo.io/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //   body request with username
      body: JSON.stringify({ username }),
    });
    const data = await response.json();
    // console log fetched data
    console.log("Fetched data:", data);
    set({ username, gameData: data });
  },

  fetchDirection: async (username, type, direction) => {
    const response = await fetch("https://labyrinth.technigo.io/action", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, type, direction }),
    });
    const newData = await response.json();
    const UpdatedGameData = {
      ...gameData,
      actions: {
        ...gameData.actions,
        direction: newData.directions,
      },
    };
    set((state) => ({
      ...state,
      gameData: UpdatedGameData,
    }));
  },
}));
