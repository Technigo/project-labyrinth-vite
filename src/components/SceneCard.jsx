import { useState, useEffect } from "react";
import { useLabyrinthStore } from "../store/useLabyrinthStore";

export const SceneCard = () => {
  const { apiData, username, nextMove, actions } = useLabyrinthStore();
  const [forward, setForward] = useState("");
  const [back, setBack] = useState("");

  useEffect(() => {
    if (actions && actions.length > 0) {
      setForward(actions[0].direction);
    }
    if (actions && actions.length > 1) {
      setBack(actions[1].direction);
    }
  }, [apiData]);

  return (
    <div>
      {apiData && (
        <>
          {actions && actions.length > 0 && (
            <>
              <p>{actions[0].description}</p>
              <button onClick={() => nextMove(username, forward)}>
                {`Go ${forward}`}
              </button>
            </>
          )}
          {actions && actions.length > 1 && (
            <>
              <p>{actions[1].description}</p>
              <button onClick={() => nextMove(username, back)}>
                {`Go ${back}`}
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};
