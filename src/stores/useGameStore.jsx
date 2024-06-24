import { create } from "zustand"

export const useLabyrinthStore = create((set) => ({
  apiData: {},
  loading: false,
  username: "",
  direction: "",
  description: "",
  actions: [],
  error: null,

  setUsername: (username) => set({ username }),
  setDirection: (direction) => set({ direction }),

  startGame: async (username) => {
    set({ loading: true, error: null })

    try {
      const response = await fetch("https://labyrinth.technigo.io/start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      })

      if (!response.ok) {
        throw new Error("Failed to start game, please try again.")
      }

      const data = await response.json()
      set({
        apiData: data,
        username,
        description: data.description,
        actions: data.actions,
      })
    } catch (error) {
      console.error("Error starting game:", error)
      set({ error: error.message })
    } finally {
      set({ loading: false })
    }
  },

  gameAction: async (username, direction, type) => {
    set({ loading: true, error: null })

    try {
      const response = await fetch("https://labyrinth.technigo.io/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, direction, type }),
      })

      if (!response.ok) {
        throw new Error("Failed to perform action. Please try again.")
      }

      const data = await response.json()
      set({
        apiData: data,
        description: data.description,
        actions: data.actions,
      })
    } catch (error) {
      console.error("Error performing action:", error)
      set({ error: error.message })
    } finally {
      set({ loading: false })
    }
  },
}))
