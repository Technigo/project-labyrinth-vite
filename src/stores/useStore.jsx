import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStore = create(
  persist(
    set => ({
      data: {}, // Data from API
      loading: true,
      coord: "",
      userName: "",
      userId: 123456789,
      gameHistory: [],

      // Functions
      // Initial fetch
      fetch: () =>
        set(async state => {
          console.log("fetch");
          try {
            const res = await fetch("https://labyrinth.technigo.io/start", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: `${state.userName}_${state.userId}`,
              }),
            });
            if (!res.ok) {
              throw new Error("Failed to fetch posts", res);
            }
            const startData = await res.json();
            set(state => ({
              data: startData,
              loading: false,
              gameHistory: [
                ...state.gameHistory,
                {
                  _id: state.gameHistory.length,
                  scene: startData.description,
                  coord: startData.coordinates,
                },
              ],
            }));
          } catch (error) {
            console.log("Error fetching data: ", error);
          }
        }),

      // Fetch next action
      fetchAction: direction =>
        set(async state => {
          try {
            const res = await fetch("https://labyrinth.technigo.io/action", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: `${state.userName}_${state.userId}`,
                type: "move",
                direction: direction,
              }),
            });
            if (!res.ok) {
              throw new Error("Failed to fetch posts", res);
            }
            const actionData = await res.json();
            set({
              data: actionData,
              loading: false,
              gameHistory: [
                ...state.gameHistory,
                {
                  _id: state.gameHistory.length,
                  scene: actionData.description,
                  coord: actionData.coordinates,
                },
              ],
            });
          } catch (error) {
            console.log("Error fetching data: ", error);
          }
        }),

      // Set loading to true
      setLoading: () => set({ loading: true }),

      // Set username from user input, and save to local
      setUserName: userInput => {
        set({ userName: userInput });
      },

      // Set random 9 digit Id to ensure unique user
      setUserId: () => {
        const min = 100000000; // Minimum 9-digit number
        const max = 999999999; // Maximum 9-digit number
        set({ userId: Math.floor(Math.random() * (max - min + 1)) + min });
      },

      // Restart adventure and clear storage
      restart: () => {
        console.log("Restart!");
        set({ userName: "", gameHistory: [] });
        localStorage.clear();
      },

      // Log new answer object to gameHistory
      setHistory: newHistory => {
        set(state => ({
          gameHistory: [
            (state.gameHistory[state.gameHistory.length - 1].move =
              newHistory.move),
            (state.gameHistory[state.gameHistory.length - 1].action =
              newHistory.action),
          ],
        }));
      },
    }),
    {
      name: "Sofias Labyrinth",
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({
        userName: state.userName,
        gameHistory: state.gameHistory,
        userId: state.userId,
      }),
    }
  )
);
