import { useGameStore } from "../stores/useGameStore";
import { useRef } from "react";

export const GameButton = ({ buttonName }) => {
  const { username, uniqueName, action, setIsStarted, isStarted, startGame, makeMove } =
    useGameStore();

  const buttonRef = useRef(null);

  const handleClick = (e) => {
    const direction = e.target.value;

    if (buttonName === "Restart") {
      setIsStarted(false);
    }

    if (buttonName === "Start") {
      if (username === "") {
        alert("Please enter an user name");
        return null;
      }
    }

    if (isStarted) {
      makeMove(uniqueName, action, direction);
    } else if (isStarted === false) {
      startGame(username);
    }
  };

  return (
    <button
      ref={buttonRef}
      value={buttonName}
      id={buttonName.toLowerCase()}
      className={`control-button ${buttonName.toLowerCase()}-button`}
      onClick={handleClick}
    >
      {buttonName}
    </button>
  );
};
