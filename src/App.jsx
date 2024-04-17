import { useState } from "react";
import LoginComponent from "./components/LoginComponent";
import GameComponent from "./components/GameComponent";
import { AudioProvider } from "./components/AudioContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  return (
    <AudioProvider>
      <div className="App">
        <h1>My Labyrinth Game</h1>
        {isLoggedIn ? (
          <GameComponent username={username} />
        ) : (
          <LoginComponent onLogin={handleLogin} />
        )}
      </div>
    </AudioProvider>
  );
}

export default App;