import { useLabyrinthStore } from "../stores/useLabyrinthStore"
import { useState } from "react"

export const StartPage = () => {
  const { startGame } = useLabyrinthStore()

  const [userName, setUserName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserName("")
    startGame(userName)
  }

  return (
    <div className="wrapper">
      <h1>Are you ready to begin your journey?</h1>
      <h2>Follow the footsteps of the legendary Lara Croft and Indiana Jones...</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">What is your name?</label>
        <input
            id="userName"
            value={userName}
            type="text"
            onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit">Begin journey</button>
      </form>
    </div>
  )
}
  