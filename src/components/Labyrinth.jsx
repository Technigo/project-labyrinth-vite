import { useLabyrinthStore } from "../stores/useLabyrinthStore";
import "./Labyrinth.css";
import labyrinthImages from "./labyrinthImages.json";

console.log(labyrinthImages);
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

  if (loading) {
    return <div>Loading ...</div>;
  }

  //Added this part to check if the data is already available for the map function otherwise the code would break.
  if (!start || !start.actions) {
    return <div>No data available.</div>;
  }

  /* 	console.log(start)
	console.log(start.actions) */
  return (
    <div className="labyrinth-start">
      <p>{start.description}</p>

      {start.actions.map((action) => (
        <button
          key={action.description}
          className={`button-${action.direction}`} // Apply the direction-specific class
          onClick={() => handleDirectionClick(action)}
        >
          {action.direction}
        </button>
      ))}

      {/* Render images based on coordinates */}
      <div className="image-container">
        {labyrinthImages.map((image) => {
          const { coordinates, imagePath } = image;
          const matchingAction = start.actions.find(
            (action) => action.coordinates === coordinates
          );

          if (matchingAction) {
            return (
              <img
                key={coordinates}
                src={imagePath}
                alt={`Image at ${coordinates}`}
              />
            );
          }

          return null;
        })}
      </div>
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
