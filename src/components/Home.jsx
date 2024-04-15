import { useEffect } from "react";
import { useLabyrinthStore } from "../store/useLabyrinthStore";
import { UsernameInput } from "./UsernameInput";
import { Scene } from "./Scene";

export const Home = () => {
  const { apiData, username, loading, nextMove } = useLabyrinthStore();

  useEffect(() => {
    console.log(apiData);
  }, [apiData]);

  return (
    <>
      {!username ? <UsernameInput /> : <Scene />}
      {loading && <div>Loading...</div>}
      {apiData && (
        <>
          <div>{apiData.description}</div>
          {apiData.actions && apiData.actions.length > 0 && (
            <>
              <p>{apiData.actions[0].description}</p>
              <button
                onClick={() => nextMove(username, apiData.actions[0].direction)}
              >
                Go
                {apiData.actions[0].direction}
              </button>
            </>
          )}
        </>
      )}
    </>
  );
};
