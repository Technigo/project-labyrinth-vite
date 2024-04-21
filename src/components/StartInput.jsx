import { useLabyrinthStore } from "../stores/useLabyrinthStore";
import { useState } from "react";
import "../style/StartInput.css";
import { HeartIcon } from "./HeartIcon";
import uniqid from "uniqid";

export const StartInput = () => {
  const { userName, setUserName, fetchStart } = useLabyrinthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [rawUserName, setRawUserName] = useState("");

  const handelUserName = (event) => {
    const newName = event.target.value;
    setRawUserName(newName);
    setUserName(newName + uniqid()); //make it unique
  };

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

  const bonusName =
    rawUserName.toLowerCase() === "frisk" ||
    rawUserName.toLowerCase() === "clara";

  return isLoading ? (
    bonusName ? (
      <p className="loading-text-bonus">I missed you...</p>
    ) : (
      <p className="loading-text">loading...</p>
    )
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
        value={rawUserName}
        placeholder="You are yourself"
        onChange={handelUserName}
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
