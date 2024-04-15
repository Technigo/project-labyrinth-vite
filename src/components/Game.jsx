import { useState } from "react";
import { appContentStore } from "../stores/appContentStore";
import { Directions } from "./Directions";

export const Game = () => {
  const { gameData, progress } = appContentStore();
  const [showDirections, setShowDirections] = useState(false);

  return (
    <div>
      <button onClick={() => setShowDirections(true)}>Show Directions</button>
      <p>Current Level: {progress}</p>
      <p>Description: {gameData?.description}</p>

      {showDirections && <Directions />}
    </div>
  );
};
