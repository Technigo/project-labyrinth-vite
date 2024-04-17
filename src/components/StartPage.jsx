import { useEffect, useRef } from "react"
import { appContentStore } from "../stores/appContentStore"

export const StartPage = () => {
    const { userName, toggleLoading, setGameData, setUserName, setDirections } = appContentStore()
    const focusRef = useRef()

    useEffect(() => {
      focusRef.current.focus()
    }, [])

    const startGame = () => {
      toggleLoading()
      fetch(`https://labyrinth.technigo.io/start`,{
            method: "POST",
            body: JSON.stringify({
              username: userName,
            }),
            headers: { "Content-Type": "application/json" },
        })
      .then((response) => response.json())
      .then((json) => {
        setGameData(json)
        if (json.actions.length === 1) {
        setDirections([json.actions[0].direction])
      } else if (json.actions.length === 2) {
        setDirections([json.actions[0].direction, json.actions[1].direction])
      }})
      .catch((error) => {
        console.log("error:", error)
      })
      .finally(toggleLoading())
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      startGame()
    }

  return (
    <div>
      <h1>Welcome!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Tell us your name:
          <input ref={focusRef} type="text" onChange={(event) => setUserName(event.target.value)}/>
        </label>
        <button type="submit">Start</button>
      </form>
    </div>
  )
}
