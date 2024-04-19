import { useLabyrinthStore } from "../stores/useLabyrinthStore";

import "../styles/DisplayLabyrinth.css";

export const DisplayLabyrinth = () => {
  const { loading, start, fetchMove, actions, description } =
    useLabyrinthStore();

  if (loading) {
    return <div>Loading ...</div>;
  }

  //Added this part to check if the data is already available for the map function otherwise the code would break.
  if (!start || !start.actions) {
    return <div>No data available.</div>;
  }

  console.log(start);
  console.log(start.actions);
  console.log(actions);
  return (
    <div className="labyrinth-start">
      <p>{description}</p>

      {actions.map((action) => (
        <button
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
  );
};
