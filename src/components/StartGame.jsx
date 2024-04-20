import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLabyrinthStore from "../store/useLabyrinthStore";
import "../styling/StartGame.css";

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
    <div className="startGameContainer">
      <h1 className="title">Welcome to the Adventure Game</h1>
      <h2 className="introText">
        Many people have been lost during the search, enter the labyrinth at
        your own risk.
      </h2>
      <p className="usernameText">Enter your username to start the game</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Enter username"
          className="usernameInput"
        />
        <button type="submit" className="usernameButton">
          Start Game
        </button>
      </form>
    </div>
  );
};

export default StartGame;
