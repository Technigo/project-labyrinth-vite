import { useAudio } from "./UseAudio" 
import { useState } from "react"

const LoginComponent = ({ onLogin }) => {
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
    <div>
      <h2>Logga in</h2>
      <button className="audio-button" onClick={toggleAudio}>
        {isPlaying ? "Pause" : "Play"} Audio
      </button>
      <form onSubmit={handleSubmit}>
        <label>
          Användarnamn:
          <input type="text" value={username} onChange={handleInputChange} />
        </label>
        <button type="submit">Logga in</button>
      </form>
    </div>
  )
}

export default LoginComponent