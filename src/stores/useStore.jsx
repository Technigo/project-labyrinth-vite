import { create } from "zustand";

export const useStore = create(set => ({
  data: {}, // Data from API
  // userName: "sofias-labyrinth-adventure",  // fixed username
  userName: localStorage["Labyrinth"] || "", // If username in storage, else empty
  loading: true,
  coord: "",

  // Functions
  // Initial fetch
  fetch: () =>
    set(async state => {
      console.log("fetch");
      const res = await fetch("https://labyrinth.technigo.io/start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: state.userName,
        }),
      });
      const apiData = await res.json();
      set({ data: apiData, loading: false, coord: apiData.coordinates });
      console.log(apiData);
    }),

  // Action fetch
  fetchAction: direction =>
    set(async state => {
      const res = await fetch("https://labyrinth.technigo.io/action", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: state.userName,
          type: "move",
          direction: direction,
        }),
      });
      const apiData = await res.json();
      set({ data: apiData, loading: false, coord: apiData.coordinates });
    }),

  // Set username from user input, and save to local
  setUserName: userInput => {
    set({ userName: userInput });
    localStorage.setItem("Labyrinth", userInput);
  },

  // Restart adventure
  restart: () => {
    console.log("Restart!!");
    set({ userName: "" });
    localStorage.clear();
  },
}));
