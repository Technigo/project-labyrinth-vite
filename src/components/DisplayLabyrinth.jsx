import Lottie from "lottie-react";
import { useEffect, useRef } from "react";

import Loading from "../assets/Loading2.json";
import { useLabyrinthStore } from "../stores/useLabyrinthStore";

import "../styles/DisplayLabyrinth.css";

export const DisplayLabyrinth = () => {
  const backgroundImageRef = useRef();
  const { loading, start, fetchMove, actions, description, coordinates } =
    useLabyrinthStore();

  useEffect(() => {
    const changeBackgroundImage = (coordinates) => {
      backgroundImageRef.current.style.backgroundImage = `url("${coordinates}.jpg")`;
    };

    changeBackgroundImage(coordinates);
  }, [coordinates]);

  if (loading) {
    return <Lottie animationData={Loading} loop={true} />;
  }

  //Added this part to check if the data is already available for the map function otherwise the code would break.
  if (!start || !start.actions) {
    return <div>No data available.</div>;
  }

  return (
    <div ref={backgroundImageRef} className="labyrinth-start">
      <div className="action-box">
        <p>{description}</p>

        {actions.map((action) => (
          <button
            className="action-button"
            key={description}
            value={action.direction}
            onClick={(e) => {
              const direction = e.target.value;
              console.log(direction);
              fetchMove(direction);
            }}
          >
            {action.direction}
          </button>
        ))}
      </div>
    </div>
  );
};
