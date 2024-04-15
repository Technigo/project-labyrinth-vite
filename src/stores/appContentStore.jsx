import { create } from 'zustand'

export const AppContentStore = create((set) => ({
  // username from input
  username: '',
  //   data from api
  gameData: {},
  progress: 0,
  //   function to set username the username variable
  setUsername: (username) => set({ username }),
  //   function to set gameData the value of data
  setGameData: (data) => set({ gameData: data }),
  //   function to set the progress , initial value it's 0
  setProgress: (progress) => set({ progress }),
  //   function to increase the progress of +1 - to connect to the onclick of the directions
  increaseProgress: () => set((state) => ({ progress: state.progress + 1 })),
  //   function to get the data and passing username as parameter
  fetchGameData: async (username) => {
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
  },
}))
