import { useLabyrinthStore } from "../stores/useLabyrinthStore";
import { useState } from "react";
import Lottie from "lottie-react";
import animationData from "./traveling.json";

export const StartInput = () => {
  const { userName, setUserName, fetchStart } = useLabyrinthStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleStartButtonClick = async () => {
    if (userName === "") {
      alert("Please set a username.");
      return;
    }

    setIsLoading(true);

    try {
      await fetchStart(userName);
    } catch (error) {
      console.error("Error starting the game:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
  };

  return isLoading ? (
    <Lottie animationData={animationData} loop={true} />
  ) : (
    <div className="start-input">
      <h1>The Maze</h1>
      <h2>Enter the labyrinth on your own risk.</h2>
      <h2>Can you find a way out of the maze?</h2>
      <label className="start-title" htmlFor="user-input">
        Enter your name:
      </label>
      <input
        className="user-input"
        id="user-input"
        type="text"
        value={userName}
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button className="start-button" onClick={handleStartButtonClick}>
        Start Adventure
      </button>
    </div>
  );
};
