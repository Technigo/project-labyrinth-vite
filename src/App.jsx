import { useEffect } from "react";
import { useGameStateStore } from "./store";
import { Menu } from "./Menu";

export const App = () => {
  const username = useGameStateStore((state) => state.username);
  const gameState = useGameStateStore((state) => state.gameState);

  const move = useGameStateStore((state) => state.move);

  useEffect(() => {
    // start("Maze Man");
  }, []);

  console.log(gameState);

  return (
    <div>
      {!username && <Menu />}

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
