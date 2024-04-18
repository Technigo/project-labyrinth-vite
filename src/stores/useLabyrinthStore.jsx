import { create } from "zustand";

export const useLabyrinthStore = create((set) => ({
  loading: false,
  gameMode: false,
  start: {},
  userName: "",
  direction: "",
  setUserName: (userInput) => set({ userName: userInput }),
  setDirection: (userDirection) => set({ direction: userDirection }),

  fetchStart: async (userName) => {
    set({ loading: true, gameMode: false });

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
          "Failed to step into the Labyrinth. Please reload and try again."
        );
      }

      const data = await response.json();
      console.log("Data from the fetch:", data);
      set({ start: data });
      set({ gameMode: true });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      set({ loading: false });
    }
  },

  fetchMove: async (userName, direction) => {
    set({ loading: true });

    try {
      const response = await fetch("https://labyrinth.technigo.io/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userName,
          type: "move",
          direction: direction,
        }),
      });

      if (!response.ok) {
        throw new Error(
          "Failed to step into the labyrinth. Please reload the page and try again."
        );
      }

      const data = await response.json();
      console.log("Data from the second fetch:", data);

      // Update the start object in the store with the new data
      set({ start: data, loading: false });
    } catch (error) {
      console.error("Error fetching data:", error);
      set({ loading: false });
    }
  },
}));

// fetchMove: async (userName, direction) => {
//   set({ loading: true, gameMode: true });

//   try {
//     const response = await fetch("https://labyrinth.technigo.io/action", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         username: userName,
//         type: "move",
//         direction: direction,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(
//         "Failed to step in to the labyrinth. Please reload the page and try again."
//       );
//     }

//     const data = await response.json();
//     console.log("Data from the second fetch:", data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   } finally {
//     set({ loading: false });
//   }
// },

/*-------------------------------

/* import { create } from "zustand";

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
      console.log("Data from inital fetch: ", data);
      set({ startData: data });
    } catch (error) {
      console.log("Error", error);
      set({ error });
    } finally {
      set({ loading: false });
    }
  },

  fetchGameData: async (userName, direction) => {

    try {
      set({loading: true, error: null})
      const response = await fetch("https://labyrinth.technigo.io/action", {
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        username: userName, 
        type: "move",
      direction: direction,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to start your adventure. Please reload the page")
    }

    const data = await response.json()
    console.log("Data from second fetch:", data)
    set({gameData: data})
  } catch (error) {
    console.log("Error", error);
    set({error});
  } finally {
  set({loading: false})
}
},
}));
 */
