import { useRef, useEffect } from "react"
import { appContentStore } from "../stores/appContentStore"

export const StartPage = () => {
    const { userName } = appContentStore()
    const focusRef = useRef()

    useEffect(() => {
      focusRef.current.focus()

    }, [])

    const startGame = () => {
      fetch(`https://labyrinth.technigo.io/start`,{
            method: "POST",
            body: JSON.stringify({
              username: userName,
            }),
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
        })
        .catch((error) => {
          console.log("error:", error)
        })
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
          <input ref={focusRef} type="text" />
        </label>
        <button type="submit">Start</button>
      </form>
    </div>
  )
}
