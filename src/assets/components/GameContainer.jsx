import { StartGame } from "./components/StartGame";
import { useGameState }from "./gameStore";

export const GameContainer = () => {
  const { description, actions } = useGameState();

  return (
    <div className="Game-container">
      {/* Your game UI components */}
      <p>{description}</p>

    </div>
  );
};


