import { create } from "zustand";

export const useStore = create((set) => ({
    username: "JohnDoe",
    action: "move", // No other action allowed.
    direction: "North", //North, South, East, West
    count: 0,


    increment: () => set(state => ({ count: state.count + 1 })),
    setDirection: (newDirection) => set({direction: newDirection}),
    setUserName: (newUsername) => set({ username: newUsername})
}))