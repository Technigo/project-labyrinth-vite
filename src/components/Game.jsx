import { useState } from "react";
import { appContentStore } from "../stores/appContentStore";
import { Directions } from "./directions/Directions";
import { Loading } from "./loading/Loading";

import "./Game.css";

export const Game = () => {
  const { gameData, progress, loading } = appContentStore();
  const [showDirections, setShowDirections] = useState(false);

  // add an if( loading) return...👇🏻
  if (loading) {
    return <Loading />; //create Loading component
  }

  const toggleDirections = () => {
    setShowDirections(!showDirections);
  };

  return (
    <section className="content-wrapper">
      <div className="text-container">
        <button className="btn" onClick={toggleDirections}>
          {showDirections ? "Show Location" : "Show Directions"}
        </button>
        {!showDirections && (
          <>
            <p className="paragraph">
              <span className="para-bold">Current Level:</span> {progress}
            </p>
            <p className="paragraph">
              {" "}
              <span className="para-bold">Description:</span>{" "}
              {gameData?.description}
            </p>
          </>
        )}

        {showDirections && <Directions />}
      </div>
    </section>
  );
};
