import { useGameStore } from "../stores/useGameStore";
import { Introduction } from "./Introduction";
import { StartGame } from "./StartGame";
import { Directions } from "./Directions";


export const GameContainer = () => {
  const {
    gameStarted,
    setGameStarted,
    description,
    actions,
    setDescription,
    setActions,
    setLoading,
    performAction,
    resetGame,
    coordinates,
  } = useGameStore();

  // Function to handle starting the game directly from Introduction component
  const handleStartGame = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://labyrinth.technigo.io/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: "TheLastJedi" }), 
      });

      if (!response.ok) {
        throw new Error("Failed to start the game. Status: " + response.status);
      }

      const data = await response.json();
      setDescription(data.description);
      setActions(data.actions);
      setGameStarted(true); 
    } catch (error) {
      console.error("Error starting the game:", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="App">
      {!gameStarted ? (
        <Introduction onStartGame={() => handleStartGame()} />
      ) : (
        <>
          <StartGame />
          <p>{description}</p>
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
