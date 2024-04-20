import { useState } from "react";
import useGameStore from "../store/gameStore";

import "./GameComponent.css";
/* import Directions from "./Directions"; */

const GameComponent = () => {
  const { gameState, loading, error } = useGameStore();
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  // No data fetching logic here, it's handled by the store
  /* 
  const moveEast = () => {
    const eastAction = data?.actions?.find(
      (action) => action.direction === "East"
    );
    if (eastAction) {
      handleAction(eastAction);
    } else {
      console.error("No action available to move East.");
    }
  }; */
  return (
    <div className="game-container">
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {gameState && (
        <div>
          {/* <Directions coordinates={gameState.coordinates} /> */}
          <p>{gameState.description}</p>
          {showMore && (
            <div>
              {gameState.actions.map((action, index) => (
                <div key={index}>
                  <strong>Direction:</strong> {action.direction}
                  <p>{action.description}</p>
                </div>
              ))}
            </div>
          )}
          {!showMore && <button onClick={handleShowMore}>Show More</button>}
        </div>
      )}
    </div>
  );
};

/* 
  return (
    <div className="game-container">
      <StartComponent onStart={setUsername} />
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div>
          <Directions coordinates={data.coordinates} />
          <p>{data.description}</p>
          <ul>
            {data.actions.map((action, index) => (
              <li key={index}>
                <strong>Direction:</strong> {action.direction}
                <p>{action.description}</p>
                <button onClick={() => handleAction(action)}>
                  Move {action.direction}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
 */
export default GameComponent;

//Instead, GameComponent should focus solely on rendering the game UI and handling actions.
