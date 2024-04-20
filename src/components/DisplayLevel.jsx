import { useState } from "react";
import { useLabyrinthStore } from "../stores/useLabyrinthStore";
import Lottie from "lottie-react";
import animationData from "./traveling.json";

export const DisplayLevel = () => {
  const { description, actions, fetchLevel } = useLabyrinthStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleAction = async (event) => {
    setIsLoading(true);
    try {
      await fetchLevel(event.target.value);
    } catch (error) {
      console.error("Error getting the next step:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1350);
    }
  };

  return isLoading ? (
    <Lottie animationData={animationData} loop={true} />
  ) : (
    <div className="level-display">
      <h3>{description}</h3>
      <div className="buttons">
        {actions
          .sort((a, b) => a.direction.localeCompare(b.direction))
          .map((action, index) => (
            <div key={index} className="button-list">
              <button
                className={`direction-button ${action.direction.toLowerCase()}`}
                value={action.direction}
                onClick={handleAction}
              >
                {action.direction}
              </button>
              <p className="direction-info">{action.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
