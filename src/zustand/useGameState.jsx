import { create } from "zustand"

export const useGameState = create((set) => ({
  gameState: null,
  started: false,
  loading: false,
  setGameUsername: (username) => set({ username }),
  setStarted: (started) => set({ started }),
  setLoading: (loading) => set({ loading }),
  musicPlaying: false,
  volume: 1,
  toggleMusic: () => set((state) => ({ musicPlaying: !state.musicPlaying })),
  setVolume: (volume) => set({ volume }),

  setGameState: async (username, type = null, direction = null) => {
    let endpoint = "start"
    let data = {
      username: username,
    }

    if (type && direction) {
      endpoint = "action"
      data.type = type
      data.direction = direction
    }

    const url = `https://labyrinth.technigo.io/${endpoint}`
    const body = JSON.stringify(data)

    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        set({ gameState: data })
        return data
      })
  },

  getBackgroundImage: (coordinates) => {
    switch (coordinates) {
      case "0,0":
        return "./assets/start.jpg"
      case "1,0":
        return "./assets/one.jpg"
      case "1,1":
        return "./assets/two.jpg"
      case "0,1":
        return "./assets/three.jpg"
      case "0,2":
        return "./assets/four.jpg"
      case "0,3":
        return "./assets/five.jpg"
      case "1,3":
        return "./assets/last.jpg"
      default:
        return "./assets/zero.jpg"
    }
  },
}))
