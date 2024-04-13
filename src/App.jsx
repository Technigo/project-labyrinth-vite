import { useEffect } from "react";
import { useGameStateStore } from "./store";

export const App = () => {
  const username = useGameStateStore((state) => state.username);
  const gameState = useGameStateStore((state) => state.gameState);
  const start = useGameStateStore((state) => state.start);
  const move = useGameStateStore((state) => state.move);

  useEffect(() => {
    start("Maze Man");
  }, []);

  console.log(gameState);

  return (
    <div>
      Labyrinth Project
      {gameState && (
        <div>
          <p>{gameState.description}</p>
          <ul>
            {gameState.actions.map((action, index) => (
              <li key={index}>
                <button onClick={() => move(action.direction)}>
                  Go {action.direction}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
