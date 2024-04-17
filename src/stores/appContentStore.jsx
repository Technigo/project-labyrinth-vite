import { create } from "zustand"

export const appContentStore = create((set) => ({
  loading: false,
  userName: "Erika",
  gameData: null,

  toggleLoading: () => set((state) => ({
    loading: !state.loading
  })),
  setGameData: (newData) => set({gameData: newData}),
  setUserName: (newUserName) => set({userName: newUserName})

}))
