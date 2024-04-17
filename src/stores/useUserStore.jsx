import { create } from "zustand";


 export const useUserStore = create((set) => ({
  userName: "Hejohå",

  setUserName: (newUserName) => set({userName: newUserName})
 }))

