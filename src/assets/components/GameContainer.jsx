import { useGameStore } from "../stores/useGameStore";
import { MazePage } from "./MazePage.jsx";
import { StartGame } from "./StartGame.jsx";

export const GameContainer = () => {
  const { coordinates, isLoading } = useGameStore();

  console.log("coordinates:", coordinates);
  console.log("isLoading:", isLoading);

  return (
    <div className="Wrapper">
      <div className="Container">
        {coordinates === "" && <StartGame />}
        {coordinates !== "" && <MazePage />}
      </div>
    </div>
  );
};
