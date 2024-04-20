import { useRef, useState } from "react";
import useGameStore from "../store/gameStore";
import { GameComponent } from "./GameComponent";
import LoadingAnimation from "./LoadingAnimation";
import "../css/StartComponent.css";

export const StartComponent = () => {
  const [inputUsername, setInputUsername] = useState("");
  const { isLoggedIn, startGame, loading } = useGameStore();
  const imageRef = useRef();

  const handleStart = (e) => {
    e.preventDefault();
    if (inputUsername.trim() !== "") {
      startGame(inputUsername.trim());
    }
  };

  const changeImage = (coordinates) => {
    imageRef.current.style.backgroundImage = `url('${coordinates}.png')`;
  };

  const handleRestart = () => {
    setInputUsername(""); // Clear the input when restarting
  };

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <div ref={imageRef} className="wrapper">
      {isLoggedIn ? (
        <GameComponent changeImage={changeImage} onRestart={handleRestart} />
      ) : (
        <div className="start-container">
          <h2 className="start-title">
            Welcome to the Labyrinth! Please sacrifice your name at the altar of
            confusion and chaos. Or, you know, just type it in and let the fun
            begin
          </h2>
          <form onSubmit={handleStart}>
            <input
              type="text"
              className="start-input"
              placeholder="Enter your name"
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              aria-label="Enter your name"
            />
            <button
              className="start-button"
              disabled={!inputUsername.trim()}
              type="submit"
            >
              Start Game
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

// this component uses the useGameStore hook to manage the username and trigger the game start
