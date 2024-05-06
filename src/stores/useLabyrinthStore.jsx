import { create } from "zustand";

export const useLabyrinthStore = create((set) => ({
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
            })
        } catch (error) {
          set({ error: error })
        } finally {
          set({ loading: false })
        }
    },
}))