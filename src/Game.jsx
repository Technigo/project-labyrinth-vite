import "./Game.css";
import { useGameStateStore } from "./store";
export function Game() {
  const gameState = useGameStateStore((state) => state.gameState);
  const move = useGameStateStore((state) => state.move);
  const restart = useGameStateStore((state) => state.restart);
  const loading = useGameStateStore((state) => state.loading);
  console.log(loading);
  return (
    <div className="Game">
      <p className="game-description">{gameState.description}</p>
      <button
        onClick={() => {
          restart();
        }}
        className="game-restart"
      >
        Restart
      </button>
      <ul className="game-actions">
        {gameState.actions.map((action, index) => (
          <li key={index}>
            {/* here i made it so that the buttons are not clickble when loading */}
            <button
              // ${action.direction} is a template literal, it will be replaced with the value of action.direction
              className={`game-navigate ${action.direction.toLowerCase()}`}
              disabled={loading}
              onClick={() => move(action.direction)}
            >
              Go {action.direction}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
