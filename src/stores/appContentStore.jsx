import { create } from "zustand"
import oneone from "../assets/oneone.jpg"
import onethree from "../assets/onethree.jpg"
import onezero from "../assets/onezero.jpg"
import zeroone from "../assets/zeroone.jpg"
import zerothree from "../assets/zerothree.jpg"
import zerotwo from "../assets/zerotwo.jpg"
import zerozero from "../assets/zerozero.jpg"

export const appContentStore = create((set, get) => ({
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
  startGame: () => {
      get().toggleLoading()
      fetch(`https://labyrinth.technigo.io/start`,{
            method: "POST",
            body: JSON.stringify({
              username: get().userName,
            }),
            headers: { "Content-Type": "application/json" },
        })
      .then((response) => response.json())
      .then((json) => {
        get().setGameData(json)
        if (json.actions.length === 1) {
        get().setDirections([json.actions[0].direction])
        } else if (json.actions.length === 2) {
          get().setDirections([json.actions[0].direction, json.actions[1].direction])
        }
        get().setImageLink(json.coordinates)
      })
      .catch((error) => {
        console.log("error:", error)
      })
      .finally(
        setTimeout(() => {
        get().toggleLoading()}, 2000)
      )
  },
  continueStory: (direction) => {
    get().toggleLoading()
    fetch(`https://labyrinth.technigo.io/action`, {
      method: "POST",
      body: JSON.stringify({
        username: get().userName,
        type: "move",
        direction: direction
      }),
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.json())
    .then((json) => {
      get().setGameData(json)
      if (json.actions.length === 1) {
        get().setDirections([json.actions[0].direction])
      } else if (json.actions.length === 2) {
        get().setDirections([json.actions[0].direction, json.actions[1].direction])
      }
      get().setImageLink(json.coordinates)
    })
    .catch((error) => {
      console.log("error:", error)
    })
    .finally(
      setTimeout(() => {
      get().toggleLoading()}, 2000)
    )
  }

}))
