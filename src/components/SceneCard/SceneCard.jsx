import { useState, useEffect } from "react";
import { useLabyrinthStore } from "../../store/useLabyrinthStore";
import "./SceneCard.css";

export const SceneCard = () => {
  const { apiData, username, nextMove, actions, isHidden, toggleHidden } =
    useLabyrinthStore();
  const [forward, setForward] = useState("");
  const [back, setBack] = useState("");
  //const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (actions && actions.length > 0) {
      setForward(actions[0].direction);
    }
    if (actions && actions.length > 1) {
      setBack(actions[1].direction);
    }
  }, [apiData]);

  return (
    <>
      {apiData && (
        <div className="actions-container">
          {actions && actions.length > 0 && (
            <div className="actions-div">
              <button className="look-btn" onClick={toggleHidden}>
                Look around
              </button>
              <p
                className={isHidden ? "hidden" : ""}
              >{`${forward}: ${actions[0].description}`}</p>
              <button
                className="move-btn forward-btn"
                onClick={() => nextMove(username, forward)}
              >
                {`GO ${forward}`}
              </button>
            </div>
          )}
          {actions && actions.length > 1 && (
            <div className="actions-div">
              <p
                className={isHidden ? "hidden" : ""}
              >{`${back}: ${actions[1].description}`}</p>
              <button
                className="move-btn back-btn"
                onClick={() => nextMove(username, back)}
              >
                {`GO ${back}`}
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};
