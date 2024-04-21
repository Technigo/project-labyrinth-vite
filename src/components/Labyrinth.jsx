import { useEffect, useRef } from "react";
import { useLabyrinthStore } from "../stores/useLabyrinthStore";
import "./Labyrinth.css";
import { Loading } from "./Loading";

export const Labyrinth = () => {
  const {
    loading,
    error,
    fetchMove,
    userName,
    coordinates,
    description,
    actions,
    setDirection, //Check this to see if it really works.
    /* set, */
  } = useLabyrinthStore();

  const imageRef = useRef();

  useEffect(() => {
    if (coordinates) {
      // Change the background image when coordinates change
      imageRef.current.style.backgroundImage = `url("/images/${coordinates}.jpg")`;
    }
  }, [coordinates]);

  const handleDirectionClick = (action) => {
    console.log("Button clicked:", action.direction);
    setDirection(action.direction);
    /* const direction = action.direction */
    /* set({ direction }) */
    fetchMove(userName, action.direction);
    /* console.log(userName, direction) */
  };

  /* const handleRestart = () => {
    setUserName(""); // Clear the input when restarting
  };
 */
  return (
    <div ref={imageRef} className="labyrinth-wrapper">
      {loading && <Loading />}
      {error && (
        <div className="error">
          <h2>{error.message}</h2>
        </div>
      )}

      {!loading && !error && (
        <div>
          <p>{description}</p>

          {actions.map((action) => (
            <button
              key={action.description}
              className={`button-${action.direction}`} // Apply the direction-specific class
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
