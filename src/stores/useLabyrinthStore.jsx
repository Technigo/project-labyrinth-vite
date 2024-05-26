/*import { create } from "zustand";

export const useLabyrinthStore = create((set, get) => ({
    loading: false,
    loggedIn: false,
    userName: null,
    coordinates: null,
    description: null,
    actions: null,
    error: null,

    restartGame: () => {
        set({ loggedIn: false })
    },

    startGame: async (userName) => {
        set({ loading: true, error: null })
        try {
            const response = await fetch("https://labyrinth.technigo.io/start", {
              method: "POST",
              body: JSON.stringify({ userName }),
              headers: { "Content-Type": "application/json" },
            })
            if (!response.ok) {
                throw new Error("Error")
              }
            const data = await response.json()
            set({
                loggedIn: true,
                coordinates: data.coordinates,
                description: data.description,
                actions: data.actions,
                error: null,
            })
        } catch (error) {
          set({ error: error.message })
        } finally {
          set({ loading: false })
        }
    },

    nextPage: async (direction) => {
        set({ loading: true, error:null });
        try {
            const response = await fetch("https://labyrinth.technigo.io/action", {
              method: "POST",
              body: JSON.stringify({
                userName: get().userName,
                type: "move",
                direction: direction,
              }),
              headers: { "Content-Type": "application/json" },
            })
            if (!response.ok) {
              throw new Error("Failed to perform action")
            }
            const data = await response.json()
            set({
              coordinates: data.coordinates,
              description: data.description,
              actions: data.actions,
            })
        } catch (error) {
          set({ error: error.message })
        } finally {
            set({ loading: false })
        }
    },
}))*/

// useLabyrinthStore.js
import { create } from "zustand";

const useLabyrinthStore = create((set, get) => ({
  loading: false,
  loggedIn: false,
  userName: null,
  coordinates: null,
  description: null,
  actions: [],
  error: null,

  startGame: async (username) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch("https://labyrinth.technigo.io/start", {
        method: "POST",
        body: JSON.stringify({ "username": username }),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Failed to start game");
      }
      const data = await response.json();
      set({
        loading: false,
        loggedIn: true,
        userName: username,
        coordinates: data.coordinates,
        description: data.description,
        actions: data.actions,
      });
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },

  performAction: async (type, direction) => {
    const { userName } = get();
    if (!userName) return;
    set({ loading: true, error: null });
    try {
      const response = await fetch("https://labyrinth.technigo.io/action", {
        method: "POST",
        body: JSON.stringify({ username: userName, type, direction }),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Failed to perform action");
      }
      const data = await response.json();
      set({
        loading: false,
        coordinates: data.coordinates,
        description: data.description,
        actions: data.actions,
      });
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },
}));

export default useLabyrinthStore;

