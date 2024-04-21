import { useEffect, useRef } from "react"
import "../../components/UserInput/UserInput.css"

export const UserInput = ({
  usernameInput,
  setUsernameInput,
  handleStartGame,
}) => {
  const focusRef = useRef()

  useEffect(() => {
    focusRef.current.focus()
  }, [])

  return (
    <div className="username-input-container">
      <label htmlFor="username" className="label">
        To enter the maze, please write your name here:
      </label>
      <input
        ref={focusRef}
        type="text"
        placeholder="Username"
        className="username-input"
        value={usernameInput}
        onChange={(event) => setUsernameInput(event.target.value)}
      />
      <button onClick={handleStartGame} className="Start-game-button">
        Start Game
      </button>
    </div>
  )
}
