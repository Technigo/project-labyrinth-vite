
import { useGlobalStoreData } from "../../stores/storeData";
import "../../styles/Buttons.css";

export const RestartButton = () => {
  const startGame = useGlobalStoreData((state) => state.startGame);

  const handleRestart = () => {
    useGlobalStoreData.setState({
      logindata: { isLoggedIn: false, username: "" },
      gamedata: {
        coordinates: "0,0",
        description: "You find yourself under a large archway opening into a cavern. A sense of purpose fills you.",
        actions: [
          {
            type: "move",
            direction: "East",
            description: "You see a worn sign that says 'The Temple of echigo'. Some of the letters are missing. An overgrown paved path leads to the East"
          }
        ]
      }
    });
    startGame("");
  };

  return (
    <button className="otherButtons restart" onClick={handleRestart}>
      Restart
    </button>
  );
};
