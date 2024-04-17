import { useState } from "react"
import GameComponent from "./components/GameComponent"
import LoginComponent from "./components/LoginComponent"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("")

  const handleLogin = (username) => {
    setUsername(username)
    setIsLoggedIn(true)
  }

  return (
    <div className="App">
      <h1>My Labyrinth Game</h1>
      {isLoggedIn ? (
        <GameComponent username={username} />
      ) : (
        <LoginComponent onLogin={handleLogin} />
      )}
    </div>
  )
}

export default App