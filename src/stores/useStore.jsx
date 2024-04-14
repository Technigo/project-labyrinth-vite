import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStore = create(
  persist(
    set => ({
      data: {}, // Data from API
      loading: true,
      coord: "",
      // userName: "sofias-labyrinth-adventure",  // fixed username
      userName: "", // If username in storage, else empty
      gameHistory: [],

      // Functions
      // Initial fetch
      fetch: () =>
        set(async state => {
          console.log("fetch");
          const res = await fetch("https://labyrinth.technigo.io/start", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: state.userName,
            }),
          });
          const apiData = await res.json();
          set(state => ({
            data: apiData,
            loading: false,
            gameHistory: [
              ...state.gameHistory,
              {
                _id: state.gameHistory.length,
                scene: apiData.description,
                coord: apiData.coordinates,
              },
            ],
          }));
        }),

      // Fetch next action
      fetchAction: direction =>
        set(async state => {
          const res = await fetch("https://labyrinth.technigo.io/action", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: state.userName,
              type: "move",
              direction: direction,
            }),
          });
          const apiData = await res.json();
          set({
            data: apiData,
            loading: false,
            gameHistory: [
              ...state.gameHistory,
              { _id: state.gameHistory.length, coord: apiData.coordinates },
            ],
          });
        }),

      // Set loading to true
      setLoading: () => set({ loading: true }),

      // Set username from user input, and save to local
      setUserName: userInput => {
        set({ userName: userInput });
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
      }),
    }
  )
);
