import { useGameStore } from "../stores/useGameStore";
import { Introduction } from "./Introduction";
import { StartGame } from "./StartGame";

export const GameContainer = () => {
  const {
    gameStarted,
    setGameStarted,
    description,
    actions,
    setDescription,
    setActions,
    setLoading,
  } = useGameStore();

  // Function to handle starting the game directly from Introduction component
  const handleStartGame = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://labyrinth.technigo.io/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: "TheLastJedi" }), 
      });

      if (!response.ok) {
        throw new Error("Failed to start the game. Status: " + response.status);
      }

      const data = await response.json();
      setDescription(data.description);
      setActions(data.actions);
      setGameStarted(true); // This will trigger the StartGame component to render
    } catch (error) {
      console.error("Error starting the game:", error);
    } finally {
      setLoading(false);
    }
  };

  // Passed to Introduction to trigger game start
  const handleGameStartFromIntro = () => {
    handleStartGame(); 
  };

  // Function to handle game actions like moving
  const handleAction = async (action) => {
    setLoading(true);
    try {
      const response = await fetch("https://labyrinth.technigo.io/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "TheLastJedi", // Assumed constant; adjust if dynamic
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      {!gameStarted ? (
        <Introduction onStartGame={handleGameStartFromIntro} />
      ) : (
        <>
          <StartGame />
          <p>{description}</p>
          <ul>
            {actions.map((action, index) => (
              <li key={index}>
                <button onClick={() => handleAction(action)}>
                  {action.description}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
