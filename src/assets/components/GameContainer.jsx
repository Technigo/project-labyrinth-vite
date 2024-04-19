import { useGameStore } from "../stores/useGameStore";
import { Introduction } from "./Introduction";
import { Directions } from "./Directions";
import { LabyrinthCard } from "./LabyrinthCard";

export const GameContainer = () => {
  const {
    gameStarted,
    setGameStarted,
    description,
    actions,
    setLoading,
    performAction,
    resetGame,
    coordinates,
  } = useGameStore();

  const handleStartGame = async (username) => {
    setLoading(true);
    try {
      const response = await fetch("https://labyrinth.technigo.io/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      });

      if (!response.ok) {
        throw new Error("Failed to start the game. Status: " + response.status);
      }

      const data = await response.json();
      setGameStarted({
        gameStarted: true,
        description: data.description,
        actions: data.actions,
        coordinates: data.coordinates,
      });
    } catch (error) {
      console.error("Error starting the game:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      {!gameStarted ? (
        <Introduction onStartGame={handleStartGame} />
      ) : (
        <>
          <LabyrinthCard
            title="The Labyrinth of Azura"
            description={description}
          />
          <Directions
            actions={actions}
            performAction={performAction}
            resetGame={resetGame}
            coordinates={coordinates}
          />
        </>
      )}
    </div>
  );
};
