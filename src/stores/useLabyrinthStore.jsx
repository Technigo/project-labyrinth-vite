import { create } from "zustand";

export const useLabyrinthStore = create((set) => ({
  // Defining the initial states
  loading: false,
  error: null,
  startData: null,
  gameData: null,
  direction: null,
  setDirection: (userDirection) => set({direction: userDirection}),
  setGameData: (data) => set({gameData: data}),

  fetchStartData: async (userName) => {
    //Check if userName is empty
    if (!userName.length > 0) {
      set((prevState) => ({
        ...prevState,
        error: new Error("You must enter a username to start"),
      }));
      return;
    }

    //optimistic coding, set error to null, because not expecting error
    set({ loading: true, error: null });
    try {
      const response = await fetch("https://labyrinth.technigo.io/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userName,
        }),
      });

      if (!response.ok) {
        throw new Error("Fetching of labyrinth didn't work");
      }

      const data = await response.json();
      console.log(data);
      set({ startData: data });
    } catch (error) {
      console.log("Error", error);
      set({ error });
    } finally {
      set({ loading: false });
    }
  },

/*   fetchGameData: async(userName) => {
    set({loading: true, error: null})
  } */
}));
