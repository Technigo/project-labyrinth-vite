import { create } from "zustand";

export const useStore = create(set => ({
  data: {},
  fetch: async () => {
    const res = await fetch("https://labyrinth.technigo.io/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "sofias-labyrinth-adventure",
      }),
    });
    const apiData = await res.json();
    set({ data: apiData });
    console.log(apiData);
  },
}));
