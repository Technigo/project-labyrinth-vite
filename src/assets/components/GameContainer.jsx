import { useGameStore } from "../stores/useGameStore";
import { LoadingAnimation } from "./LoadingAnimation.jsx";
import { MazePage } from "./MazePage.jsx";
import { StartGame } from "./StartGame.jsx";

export const GameContainer = () => {
  const { coordinates, loading } = useGameStore();

  return (
    <div className="Wrapper">
      {loading ? <LoadingAnimation /> : (
        <div className="Container">
          {coordinates ? <MazePage /> : <StartGame />}
        </div>
      )}
    </div>
  );
};
