import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useAppContentStore } from "../stores/useAppContentStore";
import "./maze.css"; 

export const Maze = () => {
  const navigate = useNavigate(); 
  const { gameState } = useAppContentStore();
  const { description, actions, coordinates } = gameState || {};

  const [backgroundStyle, setBackgroundStyle] = useState({});

  useEffect(() => {
    const backgroundImg = (coords) => {
      switch (coords) {
        case "":
          return "/assets/arch.jpg";
        case "0,0":
          return "/assets/background-1.jpg";
        case "1,0":
          return "/assets/background-2.jpg";
        default:
          return "/assets/default-background.jpg";
      }
    };

    setBackgroundStyle({
      backgroundImage: `url(${backgroundImg(coordinates)})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    });
  }, [coordinates]);

  const handleAction = async (action) => {
    // Implement logic to perform action
    // Example: await performAction(username, action);
  };

  return (
    <div className="maze-container" style={backgroundStyle}>
      <div className="maze-content">
        <p>{description}adsa</p>
        <div className="actions">
          {actions &&
            actions.map((action, index) => (
              <button key={index} onClick={() => handleAction(action)}>
                {action.name}
              </button>
            ))}
        </div>
        <button onClick={() => navigate("/")}>Back to Home</button>{" "}
        {/* Use navigate function for navigation */}
      </div>
    </div>
  );
};
