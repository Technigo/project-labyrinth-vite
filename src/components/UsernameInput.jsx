import { useState } from "react";
import { useLabyrinthStore } from "../store/useLabyrinthStore";

export const UsernameInput = () => {
  const { startGame } = useLabyrinthStore();
  const [playerName, setPlayerName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await startGame(playerName);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={playerName}
          onChange={(event) => setPlayerName(event.target.value)}
        />
      </label>
      <button type="submit">Start Game</button>
    </form>
  );
};
