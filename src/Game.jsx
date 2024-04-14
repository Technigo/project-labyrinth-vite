import { useGameStateStore } from "./store";
export function Game() {
  const gameState = useGameStateStore((state) => state.gameState);
  const move = useGameStateStore((state) => state.move);
  const loading = useGameStateStore((state) => state.loading);
  console.log(loading);
  return (
    <div>
      <p>{gameState.description}</p>
      <ul>
        {gameState.actions.map((action, index) => (
          <li key={index}>
            <button disabled={loading} onClick={() => move(action.direction)}>
              Go {action.direction}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
