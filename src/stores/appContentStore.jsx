import { create } from "zustand"
import oneone from "../assets/oneone.jpg";
import onethree from "../assets/onethree.jpg";
import onezero from "../assets/onezero.jpg";
import zeroone from "../assets/zeroone.jpg";
import zerothree from "../assets/zerothree.jpg";
import zerotwo from "../assets/zerotwo.jpg";
import zerozero from "../assets/zerozero.jpg";

export const appContentStore = create((set) => ({
  loading: false,
  userName: "Erika",
  gameData: null,
  directions: null,
  imageLink: "zerozero",

  toggleLoading: () => set((state) => ({
    loading: !state.loading
  })),
  setGameData: (newData) => set({gameData: newData}),
  setUserName: (newUserName) => set({userName: newUserName}),
  setDirections: (array) => set({directions: array}),
  setImageLink: (coordinates) => {
    switch (coordinates) {
      case "0,0":
        set({ imageLink: zerozero })
        break
      case "0,1":
        set({ imageLink: zeroone })
        break
      case "0,2":
        set({ imageLink: zerotwo })
        break
      case "0,3":
        set({ imageLink: zerothree })
        break;
      case "1,0":
        set({ imageLink: onezero })
        break
      case "1,1":
        set({ imageLink: oneone })
        break
      case "1,3":
        set({ imageLink: onethree })
        break
      default:
        set({ imageLink: zerozero })
    }
  }, 
}))
