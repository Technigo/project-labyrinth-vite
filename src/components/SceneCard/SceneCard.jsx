import { useLabyrinthStore } from "../../store/useLabyrinthStore";
import "./SceneCard.css";

export const SceneCard = () => {
  const { apiData, username, nextMove, actions, isHidden, toggleHidden } =
    useLabyrinthStore();

  return (
    <>
      {actions.length > 0 && (
        <div className="actions-container">
          <button className="look-btn" onClick={toggleHidden}>
            Look around
          </button>
          {actions.map((action, index) => (
            <div key={index} className="actions-div">
              <p className={isHidden ? "hidden" : ""}>{action.description}</p>
              <button
                className="move-btn"
                onClick={() => nextMove(username, action.direction)}
              >
                {`GO ${action.direction}`}
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
