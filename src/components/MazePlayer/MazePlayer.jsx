import React, { useEffect, useRef } from "react"
import "../../components/MazePlayer/MazePlayer.css"

export const UserInput = ({
  usernameInput,
  setUsernameInput,
  handleStartGame,
}) => {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleChange = (event) => {
    setUsernameInput(event.target.value)
  }

  return (
    <div className="username-input-container">
      <label htmlFor="username" className="label">
        To enter the maze, please write your name here:
      </label>
      <input
        ref={inputRef}
        type="text"
        placeholder="Username"
        className="username-input"
        value={usernameInput}
        onChange={handleChange}
      />
      <button onClick={handleStartGame} className="start-game-button">
        Start Game
      </button>
    </div>
  )
}
