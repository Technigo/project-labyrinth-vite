import { useAudio } from "./UseAudio"
import { useState } from "react"
import "../css/login.css"

export const LoginComponent = ({ onLogin }) => {
  const [username, setUsername] = useState("")
  const { isPlaying, toggleAudio } = useAudio()

  const handleInputChange = (event) => {
    setUsername(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onLogin(username)
  }

  return (
    <div className="login-container">
      <h1>My Labyrinth Game</h1>

      <button className="audio-button" onClick={toggleAudio}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleInputChange} />
        </label>
        <button type="submit">Start</button>
      </form>
    </div>
  )
}


