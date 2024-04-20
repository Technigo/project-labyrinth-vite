import { useState } from "react";
import useGameStore from "../store/gameStore";

import "./StartComponent.css";

const StartComponent = () => {
  const [inputUsername, setInputUsername] = useState("");
  const { startGame } = useGameStore();

  const handleStart = async (event) => {
    event.preventDefault();
    if (inputUsername.trim() !== "") {
      console.log("Starting game..");
      try {
        await startGame(inputUsername.trim());
      } catch (error) {
        console.error("Error starting game:", error);
      }
    } else {
      console.error("Username cannot be empty");
    }
  };

  return (
    <div className="start-container">
      <h2 className="start-title">
        Welcome to the Labyrinth! Please sacrifice your name at the altar of
        confusion and chaos. Or, you know, just type it in and let the fun begin
      </h2>
      <form onSubmit={handleStart}>
        <input
          type="text"
          className="start-input"
          placeholder="Enter your name"
          value={inputUsername}
          onChange={(e) => setInputUsername(e.target.value)}
          aria-label="Enter your name"
        />
        <button className="start-button" type="submit">
          Start Game
        </button>
      </form>
    </div>
  );
};

export default StartComponent;

// this component uses the useGameStore hook to manage the username and trigger the game start
