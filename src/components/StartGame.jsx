import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLabyrinthStore from "../store/useLabyrinthStore";

const StartGame = () => {
  const [username, setUsername] = useState("");
  const { startGame, setLoading, setError } = useLabyrinthStore();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await startGame(username);
      navigate("/rooms");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Welcome to the Adventure Game</h1>
      <h2>Enter your username to start the game</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Enter username"
        />
        <button type="submit">Start Game</button>
      </form>
    </div>
  );
};

export default StartGame;
