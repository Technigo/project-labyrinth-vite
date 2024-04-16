import create from "zustand";

export const useGameState = create((set) => ({
    loading:false,
    username: '',
    description: '',
    actions:[],
    updateGame: (newState) => set(newState),
}));
