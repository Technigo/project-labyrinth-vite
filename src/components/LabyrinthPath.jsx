import Lottie from "lottie-react";
import Loading from "../assets/Loading.json";
import { useLabyrinthStore } from "../stores/useLabyrinthStore.jsx";
import "./LabyrinthPath.css";

export const LabyrinthPath = () => {
  const {
    loading,
    actions,
    setDirection,
    fetchMove,
    description,
    coordinates,
  } = useLabyrinthStore();

  const imageLink = `src/components/Images/${coordinates}.jpg`;

  const handleClick = (action) => {
    console.log("Button clicked:", action.direction);
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
    <div className="labyrinth-path">
      <img src={imageLink} className="background-img" />
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
  );
};
