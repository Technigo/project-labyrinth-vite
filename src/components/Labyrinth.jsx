import { useLabyrinthStore } from "../stores/useLabyrinthStore";
import "./Labyrinth.css";
import { Loading } from "./Loading";

export const Labyrinth = () => {
  const {
    loading,
    start,
    fetchMove,
    userName,
    setDirection, //Check this to see if it really works.
    /* set, */
  } = useLabyrinthStore();

  const handleDirectionClick = (action) => {
    /* console.log('Button clicked:', action.direction) */
    setDirection(action.direction);
    /* const direction = action.direction */
    /* set({ direction }) */
    fetchMove(userName, action.direction);
    /* console.log(userName, direction) */
  };

  return (
    <div className="labyrinth-start">
      {loading && <Loading />}
      {!loading && (
        <div>
          <p>{start.description}</p>

          {start.actions.map((action) => (
            <button
              key={action.description}
              className={`button-${action.direction}`}
              onClick={() => handleDirectionClick(action)}
            >
              {action.direction}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

/* import { useEffect } from "react";

import { useLabyrinthStore } from "../stores/useLabyrinthStore";
import { useUserStore } from "../stores/useUserStore";

export const Labyrinth = () => {
  //Destructure the data
  const { userName } = useUserStore();
  const { startData, loading, error, fetchStartData, fetchGameData } = useLabyrinthStore();

  useEffect(() => {
    fetchStartData(userName);
  }, [fetchStartData, userName]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  //Not finished, need to get some form of state?
  return userName && startData? (
    <div>
      <p>Description: {startData.description}</p>
      <ul>
        {startData.actions.map((action, index) => (
          <li key={index}>
            <button onClick={() => fetchGameData(userName, action.direction)}>{action.direction}</button> 
          </li>
        ))}
      </ul>
    </div>
  ) : null

};
 */
