import { create } from 'zustand'

export const useAppContentStore = create((set, get) => ({
  // username from input
  username: '',
  loading: false,
  //   data from api
  gameData: {},
  showDirections: false,
  //   function to set username the username variable
  setUsername: (username) => set({ username }),
  //   function to set gameData the value of data
  setGameData: (data) => set({ gameData: data }),
  // function to to show/not show the directions
  toggleDirections: () =>
    set((state) => ({ showDirections: !state.showDirections })),

  //   function to get the data and passing username as parameter
  fetchGameData: async (username) => {
    set({ loading: true })
    try {
      const response = await fetch('https://labyrinth.technigo.io/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        //   body request with username
        body: JSON.stringify({ username }),
      })
      const data = await response.json()
      set({ username, gameData: data })
    } catch (error) {
      console.error('Error fetching game data:', error)
    } finally {
      set({ loading: false }) // Set loading state back to false after fetch completes
    }
  },

  fetchDirection: async (type, direction) => {
    set({ loading: true })
    try {
      const response = await fetch('https://labyrinth.technigo.io/action', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: get().username, type, direction }),
      })
      const newData = await response.json()

      set({
        gameData: {
          coordinates: newData.coordinates,
          description: newData.description,
          actions: newData.actions,
        },
      })
    } catch (error) {
      console.error('Error fetching game direction:', error)
    } finally {
      set({ loading: false }) // Set loading state back to false after fetch completes
    }
  },
}))
