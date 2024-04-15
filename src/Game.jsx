import "./Game.css";
import { useGameStateStore } from "./store";
export function Game() {
  const gameState = useGameStateStore((state) => state.gameState);
  const move = useGameStateStore((state) => state.move);
  const loading = useGameStateStore((state) => state.loading);
  console.log(loading);
  return (
    <div className="Game">
      <p className="Game-description">{gameState.description}</p>
      <ul className="Game-actions">
        {gameState.actions.map((action, index) => (
          <li key={index}>
            {/* here i made it so that the buttons are not clickble when loading */}
            <button
        
              className={`Game-navigate ${action.direction}`}
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
