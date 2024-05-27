import { useState, useEffect } from "react";
import { useGlobalStoreData } from "../../stores/storeData";
import { RestartButton } from "../components/Buttons/Buttons";
import "../styles/GameScreen.css";

export const GameScreen = () => {
  const [isLoading, setLoading] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const gamedata = useGlobalStoreData((state) => state.gamedata);
  const sendAction = useGlobalStoreData((state) => state.sendAction);
  const username = useGlobalStoreData((state) => state.username());

  useEffect(() => {
    setShowActions(false);
  }, [gamedata.coordinates]); // Reset actions when coordinates change

  const handleAction = async (action) => {
    setLoading(true);
    try {
      await sendAction(username, action.type, action.direction);
    } catch (error) {
      console.error("Failed to perform action:", error);
    } finally {
      setLoading(false);
    }
  };

  const cleanCoordinates = gamedata.coordinates.replace(",", "-");
  const backgroundImageUrl = `/background-image-${cleanCoordinates}.png`;

  const hasDirections = gamedata.actions.some((action) => action.type === "move");

  return (
    <div className="game-screen-background" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className="game-screen">
        <p className="description">{gamedata.description}</p>
        {hasDirections && (
          <button className="otherButtons showDirections" onClick={() => setShowActions(!showActions)}>
            {showActions ? "Hide Directions" : "Show Directions"}
          </button>
        )}
        {showActions && (
          <div className="actions">
            {gamedata.actions.map((action, index) => (
              <div key={index}>
                {action.type === "move" && (
                  <button className="btnDirection" onClick={() => handleAction(action)} disabled={isLoading}>
                    Go: {action.direction}
                  </button>
                )}
                <p>{action.description}</p>
              </div>
            ))}
          </div>
        )}
        <RestartButton />
      </div>
    </div>
  );
};
