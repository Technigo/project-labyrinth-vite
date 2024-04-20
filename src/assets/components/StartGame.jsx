import { useState } from "react";
import { useGameStore } from "../stores/useGameStore";
import { LoadingAnimation } from "./LoadingAnimation";

export const StartGame = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    setDescription,
    setActions,
    setCoordinates,
    setGameStarted,
    setUsername: setStoreUsername,
  } = useGameStore();

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
      setStoreUsername(username); 
      setGameStarted(true);
      setDescription(data.description);
      setActions(data.actions);
      setCoordinates(data.coordinates);
    } catch (error) {
      console.error("Failed to start game:", error);
    } finally {
      setLoading(false);
    }
  };

  return !loading ? (
    <div className="Start-wrapper">
      <h1>The Maze</h1>
      <p>Are you adventurous enough? <br/>
        Delve into a world of fantasy, mystery and adventure!</p>
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
        />{" "}
        <br />
        <button type="submit">
          Enter the doorway and delve into the unknown
        </button>
      </form>
    </div>
  ) : (
    <LoadingAnimation />
  );
};
