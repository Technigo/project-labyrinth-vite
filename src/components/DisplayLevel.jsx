import { useLabyrinthStore } from "../stores/useLabyrinthStore";

export const DisplayLevel = () => {
  const { levelDesciption, actions, fetchLevel } = useLabyrinthStore();

  const handleAction = (event) => {
    fetchLevel(event.target.value);
  };

  return (
    <div className="level-display">
      <h3>{levelDesciption}</h3>
      <div className="buttons">
        {actions
          .sort((a, b) => a.direction.localeCompare(b.direction))
          .map((action, index) => (
            <div key={index} className="button-list">
              <button
                className={`direction-button ${action.direction.toLowerCase()}`}
                value={action.direction}
                onClick={handleAction}
              >
                {action.direction}
              </button>
              <p className="direction-info">{action.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
