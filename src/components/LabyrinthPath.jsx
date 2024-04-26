import Lottie from "lottie-react";
import Loading from "../assets/Loading.json";
import { useRef, useEffect } from "react";
import { useLabyrinthStore } from "../stores/useLabyrinthStore.jsx";
import "./LabyrinthPath.css";

export const LabyrinthPath = () => {
  const imageLink = useRef();
  const {
    loading,
    actions,
    setDirection,
    fetchMove,
    description,
    coordinates,
  } = useLabyrinthStore();

  useEffect(() => {
    if (coordinates) {
      imageLink.current.style.backgroundImage = `url("/public/${coordinates}.jpg")`;
    }
  }, [coordinates]);

  const handleClick = (action) => {
    setDirection(action.direction);
    fetchMove(action.direction);
  };

  if (loading) {
    return (
      <div className="lottie">
        <Lottie animationData={Loading} loop={true} />
      </div>
    );
  }

  return (
    <div className="labyrinth-wrapper" ref={imageLink}>
      <div className="labyrinth-path">
        <div className="direction">
          <p className="description-text">{description}</p>
          <div className="options">
            {actions.map((action) => (
              <div className="direction-buttons" key={action.coordinates}>
                <button
                  className="option-button"
                  key={action.coordinates}
                  value={action.direction}
                  onClick={() => handleClick(action)}
                >
                  <p className="path-text">{action.description}</p>
                  <p className="path-direction">Go {action.direction}</p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
