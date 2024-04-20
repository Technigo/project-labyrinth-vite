import { useLabyrinthStore } from "../stores/useLabyrinthStore";
import { useState } from "react";
import "../style/StartInput.css";
import { HeartIcon } from "./HeartIcon";

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
    <p>loading...</p>
  ) : (
    <div className="start-input">
      <h1 className="app-title">
        <span>
          <HeartIcon />
        </span>
        UNDERTECH
      </h1>
      <h2 className="app-intro">
        Welcome, traveler, to the realm of Undertech,
      </h2>

      <h2 className="app-intro">
        Are you ready to tread the path of mercy or face the trial in the end of
        your journey?
      </h2>
      <label className="input-title" htmlFor="user-input">
        Enter your name:
      </label>
      <input
        className="user-input"
        id="user-input"
        type="text"
        value={userName}
        placeholder="You are yourself"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleStartButtonClick();
          }
        }}
      />
      <button className="start-button" onClick={handleStartButtonClick}>
        Start
      </button>
    </div>
  );
};
