import { useEffect } from "react";

import { useStartLabyrinthStore } from "../stores/useStartLabyrinthStore";

export const DisplayStartLabyrinth = () => {
  const { loading, start, fetchStart } = useStartLabyrinthStore();

  useEffect(() => {
    fetchStart();
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }

  //Added this part to check if the data is already available for the map function otherwise the code would break.
  if (!start || !start.actions) {
    return <div>No data available.</div>;
  }

  console.log(start);
  console.log(start.actions);
  return (
    <>
      <p>{start.description}</p>

      {start.actions.map((action) => (
        <p key={action.description}>{action.direction}</p>
      ))}
    </>
  );
};
