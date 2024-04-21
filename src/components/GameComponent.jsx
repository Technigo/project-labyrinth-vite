import { useEffect, useState } from "react";
import useGameStore from "../store/gameStore";
import { directionRotationMap } from "../utils/directionMap";
import "../css/GameComponent.css";

export const GameComponent = ({ changeImage, onRestart }) => {
  const { coordinates, description, actions, performAction, restart } =
    useGameStore();
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prevState) => !prevState);
  };

  useEffect(() => {
    /*     console.log("Current coordinates:", coordinates); */
    changeImage(coordinates);
  }, [changeImage, coordinates]);

  return (
    <div className="game-container">
      <h2>{description}</h2>

      {/* Button to show/hide action descriptions */}
      {actions.length > 0 && (
        <button className="show-more-btn" onClick={toggleDetails}>
          {showDetails ? (
            <>
              <img src="/icons/eye-open.png" alt="Hide Details" />
            </>
          ) : (
            <>
              <img src="/icons/eye.png" alt="Show Details" />
            </>
          )}
        </button>
      )}

      {/* Display action buttons with rotation based on direction */}
      {actions.length > 0 && (
        <div className="action-container">
          {actions.map((action, index) => {
            const direction = action.direction.charAt(0).toUpperCase();
            const rotationAngle = directionRotationMap[direction]; //get rotation angle
            return (
              <div key={index}>
                {showDetails && <p>{action.description}</p>}
                <button
                  className="action-btn"
                  onClick={() => {
                    /*   console.log("Performing action:", action.direction); */
                    performAction(action.direction);
                  }}
                >
                  <img
                    className="action-btn-icon"
                    src="/icons/arrow.png"
                    alt={`Arrow pointing ${direction}`}
                    style={{
                      transform: `rotate(${rotationAngle}deg)`, // Rotate icon based on direction
                    }}
                  />
                  {direction}
                </button>
              </div>
            );
          })}
        </div>
      )}

      <button
        className="restart-btn"
        className="restart-btn"
        onClick={() => {
          restart();
          changeImage("start");
          if (onRestart) {
            onRestart();
          }
        }}
      >
        <img src="/icons/restart.png" alt="Restart" className="restart-icon" />
      </button>
    </div>
  );
};

// GameComponent should focus solely on rendering the game UI and handling actions. */}
