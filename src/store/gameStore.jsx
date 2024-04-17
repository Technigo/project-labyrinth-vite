import { create } from "zustand";

const useGameStore = create((set) => ({
  data: null,
  fetchData: async () => {
    const response = await fetch(`https://labyrinth.technigo.io/start`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "UniqueUsername",
      }),
    });
    const data = await response.json();
    console.log(data)
    set({ data });
  },
}));

export default useGameStore;
