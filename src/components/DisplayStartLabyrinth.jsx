import { useStartLabyrinthStore } from "../stores/useStartLabyrinthStore";

import "../styles/DisplayStartLabyrinth.css";

export const DisplayStartLabyrinth = () => {
  const {
    loading,
    start,
    direction,
    fetchMove,
    userName /* fetchStart, userName */,
  } = useStartLabyrinthStore(); //Sofe: don't we need all the properties in here? like gameFlow and userName too? I see that we're not using it, but I think Matilda talked about it yesterday?

  const handleMoveButtonClick = () => {
    /* fetchMove(userName, direction);
    console.log(userName, direction); */
  };

  if (loading) {
    return <div>Loading ...</div>;
  }

  //Added this part to check if the data is already available for the map function otherwise the code would break.
  if (!start || !start.actions) {
    //what is actions?
    return <div>No data available.</div>;
  }

  console.log(start);
  console.log(start.actions);
  return (
    <div className="labyrinth-start">
      <p>{start.description}</p>

      {start.actions.map((action) => (
        <button
          key={action.description}
          value={action.direction}
          onClick={handleMoveButtonClick(action.direction)}
        >
          {action.direction}
        </button>
      ))}
    </div>
  );
};
