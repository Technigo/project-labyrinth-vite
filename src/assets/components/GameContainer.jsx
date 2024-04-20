import { useGameStore } from "../stores/useGameStore";
import { MazePage } from "./MazePage.jsx";
import { StartGame } from "./StartGame.jsx";

export const GameContainer = () => {
  const { coordinates } = useGameStore();

  return (
    <div className="Wrapper">
      <div className="Container">
        {coordinates ? <MazePage /> : <StartGame />}
      </div>
    </div>
  );
};
