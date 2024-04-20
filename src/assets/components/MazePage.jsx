import { MazeCard } from "../components/MazeCard";
import { Directions } from "../components/Directions";
import { useGameStore } from "../stores/useGameStore";

export const MazePage = () => {
  const { description, actions, performAction, gameStarted, coordinates, resetGame } = useGameStore();

  const title = "The Lost City of Azura";

if (!gameStarted) {
  console.log("Game has not started");
  return null; 
}

  return (
    <>
      <div className="Game-container">
        {gameStarted && (
          <>
            <MazeCard
              title={title}
              description={description}
              actions={actions}
              performAction={performAction}
            />
            <Directions actions={actions} performAction={performAction} coordinates={coordinates} resetGame={resetGame}/>
          </>
        )}
      </div>
    </>
  );
};
