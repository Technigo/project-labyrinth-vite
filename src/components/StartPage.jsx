import { useEffect, useRef } from "react"
import { appContentStore } from "../stores/appContentStore"

export const StartPage = () => {
    const { userName, toggleLoading, setGameData, setUserName } = appContentStore()
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
        console.log(json)
        setGameData(json)
      })
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
      <p>Hello {userName}</p>
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
