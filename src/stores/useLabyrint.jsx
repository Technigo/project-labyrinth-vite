import { create } from "zustand";

const url = "https://labyrinth.technigo.io/start"


export const useLabyrint = create(set => ({
  labyrint: [],
  username: "",
  loading: false,
  error:null,
  setUsername: (username) => {set({ username });
  console.log(username)},
  fetchLabyrint: async (username) => {
    const data = { username: username };
    console.log(data)
    set({ loading: true, error: null });
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      const labyrint = await response.json();
      set({ labyrint, loading: false });
    } catch (error) {
      set({ error, loading: false });
    }
  }}))

