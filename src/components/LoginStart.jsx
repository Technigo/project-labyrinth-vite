import { useState } from "react";
import { useGlobalStoreData } from "../stores/StoreData";
import "../styles/LoginStart.css";

export const LoginStart = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const startGame = useGlobalStoreData((state) => state.startGame);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleStartGame = async () => {
    if (!username.trim()) {
      setError("Please enter a username.");
      return;
    }
    setLoading(true);
    try {
      await startGame(username);
    } catch (error) {
      setError("Failed to start the game. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-background">
      <div className="container-start">
        <h1>WELCOME TO THE MAZE</h1>
        <p className="subtitle">Echoes of the Labyrinth</p>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Type username here"
          aria-label="Enter your username"
        />
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleStartGame} disabled={isLoading}>
          {isLoading ? "Loading..." : "Start Game"}
        </button>
      </div>
    </div>
  );
};
