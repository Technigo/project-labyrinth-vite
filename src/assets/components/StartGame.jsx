import { useState } from "react";
import { useGameStore } from "../stores/useGameStore";

export const StartGame = () => {
  const [username, setUsername] = useState("");
  const { setDescription, setActions, setLoading, setCoordinates, setGameStarted } =
    useGameStore();

  // Function to start the game
  const startGame = async () => {
    if (!username.trim()) {
      alert("Please enter a username.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("https://labyrinth.technigo.io/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setGameStarted(true);
      setDescription(data.description);
      setActions(data.actions);
      setCoordinates("0,0"); 
    } catch (error) {
      console.error("Failed to start game:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>The Lost City of Azura</h2>
      <p>
        In the heart of a dense jungle lies the Lost City of Azura, rumored to
        hold unimaginable treasures and ancient secrets. Many adventurers have
        attempted to uncover its mysteries, but none have returned. You, a
        daring explorer, have decided to embark on this perilous journey. Will
        you unravel the secrets of Azura, or will you become another lost soul
        swallowed by the jungle?
      </p>
      <p>
        As you push through the thick foliage, you stumble upon an ancient stone
        doorway half-buried in the overgrowth. A sense of excitement pulses
        through your veins as you realize you've discovered the entrance to the
        Lost City of Azura. You stand at the threshold, faced with a choice:
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          startGame();
        }}
      >
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: "10px" }}
        />
        <button type="submit">
          Enter the doorway and delve into the unknown.
        </button>
      </form>
    </div>
  );
};
