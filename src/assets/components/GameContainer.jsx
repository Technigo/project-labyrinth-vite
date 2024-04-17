import { useEffect } from "react";
import { StartGame } from "./StartGame";
import { useGameStore } from "../stores/useGameStore"; 
import { Introduction } from "./Introduction";

export const GameContainer = () => {
  const {
    username,
    description,
    actions,
    setDescription,
    setActions,
    setLoading,
  } = useGameStore();

  // Function to handle game actions like moving
  const handleAction = async (action) => {
    setLoading(true);
    try {
      const response = await fetch("https://labyrinth.technigo.io/action", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username, // Use the username from the Zustand store
          type: action.type,
          direction: action.direction,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setDescription(data.description);
      setActions(data.actions);
    } catch (error) {
      console.error("Error handling action:", error);
      // Optionally update the UI to show an error message
    } finally {
      setLoading(false);
    }
  };

  // Function to initialize the game state
  const handleStartGame = () => {
    console.log("Game started! Fetching initial game state...");
    // Assuming StartGame component already triggers the game start
  };

  // Optionally, if StartGame does not handle its own fetching:
  useEffect(() => {
    handleStartGame(); // Call start game function on component mount
  }, []);

  return (
    <div className="App">
      <StartGame />
      <Introduction onStartGame={handleStartGame} />
      <p>{description}</p>
      {actions.length > 0 && (
        <ul>
          {actions.map((action, index) => (
            <li key={index}>
              <button onClick={() => handleAction(action)}>
                {action.description}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
