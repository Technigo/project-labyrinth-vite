import { create } from "zustand"

const useGameState = create((set) => ({
  gameState: null,
  started: false,
  loading: false,
  setGameUsername: (username) => set({ username }),
  setGameState: (gameState) => set({ gameState }),
  setStarted: (started) => set({ started }),
  setLoading: (loading) => set({ loading }),
  musicPlaying: false,
  volume: 1,
  toggleMusic: () => set((state) => ({ musicPlaying: !state.musicPlaying })),
  setVolume: (volume) => set({ volume }),
}))

export default useGameState
