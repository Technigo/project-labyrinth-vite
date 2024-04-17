import { create } from "zustand";

export const useLabyrinthStore = create((set) => ({
  username: null,
  id: null,
  loggedIn: false,
  coordinates: null,
  description: null,
  actions: [],
  loading: false,
  error: null,

  updateUsername: (newUsername) => {
    set({ username: newUsername });
  },
  updateId: (newId) => {
    set({ username: newId });
  },
  updateCoordinates: (newCoordinates) => {
    set({ coordinates: newCoordinates });
  },
  updateDescription: (newDescription) => {
    set({ description: newDescription });
  },
  updateActions: (newActions) => {
    set({ actions: newActions });
  },
  updateLoggedIn: (newStatus) => {
    set({ loggedIn: newStatus });
  },


  startGame: async (nameInput) => {
    set({ loading: true, error: null, userName: nameInput })
    try {
      const response = await fetch('https://labyrinth.technigo.io/start', {
        method: 'POST',
        body: JSON.stringify({ username: nameInput }),
        headers: { 'Content-Type': 'application/json' },
      })
      if (!response.ok) {
        throw new Error('Could not fetch')
      }
      const data = await response.json()
      console.log(data)
      console.log(nameInput)
      set({
        coordinates: data.coordinates,
        description: data.description,
        actions: data.actions,
        loggedIn: true,
      })
      console.log(data.actions)
    } catch (error) {
      console.log('error:', error)
      set({ error: error })
    } finally {
      set({ loading: false })
    }
  },
}))
