import { create } from "zustand"

export const useLabyrinthStore = create((set) => ({
  apiData: {},
  loading: false,
  username: "",
  direction: "",
  description: "",
  actions: [],
  error: null,
  //Initial states

  //functions to set username and direction
  setUsername: (newUsername) => set({ username: newUsername }),
  setDirection: (newDirection) => set({ direction: newDirection }),

  //Function to start game
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
        throw new Error("Failed to start game, please try again")
      }
      const data = await response.json()
      set({
        apiData: data,
        username,
        loading: false,
        description: data.description,
        actions: data.actions,
      })
    } catch (error) {
      console.log("Error fetching data: ", error)
      set({ error: error.message })
    } finally {
      set({ loading: false })
    }
  },

  //Function to use directions
  gameAction: async (username, direction, type) => {
    set({ loading: true, error: null })

    try {
      const response = await fetch("https://labyrinth.technigo.io/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, direction, type }),
      })

      if (!response.ok) {
        throw new Error(
          "Failed to start game. Please try to reload the page and start over."
        )
      }

      const data = await response.json()
      set({
        apiData: data,
        description: data.description,
        actions: data.actions,
        loading: false,
      })
    } catch (error) {
      console.error("Error fetching data: ", error)
      set({ error: error.message })
    } finally {
      set({ loading: false })
    }
  },
}))
