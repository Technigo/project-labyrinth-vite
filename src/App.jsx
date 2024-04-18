import { useState } from "react";
import LoginComponent from "./components/LoginComponent";
import GameComponent from "./components/GameComponent";
import { AudioProvider } from "./components/AudioContext";
import useGameState from "./zustand/useGameState";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const { gameState, getBackgroundImage } = useGameState();

  const handleLogin = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  return (
    <AudioProvider>
      <div className="App background"
      style={{
        backgroundImage: `radial-gradient(circle at center, rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${getBackgroundImage(
          gameState?.coordinates
        )})`,
      }}>
        <div className="app">
        {isLoggedIn ? (
          <GameComponent username={username} />
        ) : (
          <LoginComponent onLogin={handleLogin} />
        )}
         </div>
      </div>
    </AudioProvider>
  );
}

export default App;