// StartGame.jsx
import { useEffect } from "react";
import { useGameState } from "../gameStore";

export const StartGame = () => {
  const { updateGame } = useGameState();

  const startGame = async () => {
    try {
      const response = await fetch("https://labyrinth.technigo.io/start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: "The Lost City of Azura" }),
      });
      const data = await response.json();
      updateGame({
        loading: false,
        description: data.description,
        actions: data.actions,
      });
    } catch (error) {
      console.error("Error starting the game:", error);
    }
  };

  useEffect(() => {
    startGame();
  }, []); 

  return null; 
};

