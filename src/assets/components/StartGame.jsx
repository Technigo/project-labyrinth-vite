import { useEffect } from "react";
import { useGameStore } from "../stores/useGameStore";

export const StartGame = () => {
  const { setUsername, setDescription, setActions, setLoading } =
    useGameStore();

  useEffect(() => {
    const startGame = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://labyrinth.technigo.io/start", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: "TechnigoPlayer" }),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDescription(data.description);
        setActions(data.actions);
      } catch (error) {
        console.error("Failed to start game:", error);
      }
      setLoading(false);
    };

    startGame();
  }, [setUsername, setDescription, setActions, setLoading]);
  return null;
};
