import { useStartLabyrinthStore } from "../stores/useStartLabyrinthStore";

export const DisplayStartLabyrinth = () => {
  const { loading, start /* fetchStart, userName */ } =
    useStartLabyrinthStore(); //Sofe: don't we need all the properties in here? like gameFlow and userName too? I see that we're not using it, but I think Matilda talked about it yesterday?

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
    <>
      <p>{start.description}</p>

      {start.actions.map((action) => (
        <p key={action.description}>{action.direction}</p>
      ))}
    </>
  );
};
