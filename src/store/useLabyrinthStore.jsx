import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useLabyrinthStore = create(
  persist((set) => ({
    username: null,
    id: null,
    loggedIn: false,
    coordinates: null,
    description: null,
    actions: [],
    loading: false,
    error: null,
    move: 'move',
    history: [],

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
    updateHistory: (direction) => {
      set((state) => ({ history: [...state.history, direction] }));
    },
    startGame: async (nameInput) => {
      set({ loading: true, error: null, history: [] });
      try {
        const response = await fetch('https://labyrinth.technigo.io/start', {
          method: 'POST',
          body: JSON.stringify({ username: nameInput }),
          headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
          throw new Error('Could not fetch');
        }
        const data = await response.json();
        console.log(data);
        set({
          coordinates: data.coordinates,
          description: data.description,
          actions: data.actions,
          loggedIn: true,
        });
        console.log(data.actions);
      } catch (error) {
        console.log('error:', error);
        set({ error: error });
      } finally {
        set({ loading: false });
      }
    },

    changeLocation: async (id, actions, move) => {
      set({ loading: true, error: null });
      try {
        const response = await fetch('https://labyrinth.technigo.io/action', {
          method: 'POST',
          body: JSON.stringify({
            username: id,
            type: move,
            direction: actions,
          }),
          headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
          throw new Error('Could not fetch');
        }
        const newData = await response.json();
        console.log(newData);
        set({
          coordinates: newData.coordinates,
          description: newData.description,
          actions: newData.actions,
        });
        console.log('newData:', newData.actions);
      } catch (error) {
        console.log('error:', error);
        set({ error: error });
      } finally {
        set({ loading: false });
      }
    },
    restart: () => {
      set({ loggedIn: false });
    },
  }), {
    name: 'labyrinth-storage',
  })
);
