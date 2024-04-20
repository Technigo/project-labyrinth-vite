import { useState } from "react";
import { useLabyrinthStore } from "../../store/useLabyrinthStore";
import "./UsernameInput.css";

export const UsernameInput = () => {
  const { startGame } = useLabyrinthStore();
  const [playerName, setPlayerName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await startGame(playerName);
  };
  return (
    <form className="username-form" onSubmit={handleSubmit}>
      <h1>Welcome, traveller.</h1>
      <p>To begin the adventure, please enter your name:</p>
      <label>
        <input
          type="text"
          value={playerName}
          placeholder="Enter your name"
          onChange={(event) => setPlayerName(event.target.value)}
        />
      </label>
      <button className="start-btn" type="submit">
        start game
      </button>
    </form>
  );
};
