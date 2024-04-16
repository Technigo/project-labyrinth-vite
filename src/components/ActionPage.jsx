import { useEffect } from "react";
import { useLabyrinthStore } from "../stores/useLabyrinthStore";

export const ActionPage = ({ changeBgImg }) => {
  const { coordinates, description, actions, makeMove, restart } =
    useLabyrinthStore();

  // useEffect that runs on mount of the component and changes the bg img
  useEffect(() => {
    changeBgImg();
  }, [changeBgImg]);

  return (
    <div>
      ActionPage
      <p>{coordinates}</p>
      <p>{description}</p>
      {actions.map((action, index) => (
        <button
          value={action.direction}
          key={index}
          onClick={e => {
            const direction = e.target.value;
            console.log(direction);
            makeMove(direction);
          }}
        >
          {action.direction}
        </button>
      ))}
      <button type="button" onClick={restart}>
        Restart
      </button>
    </div>
  );
};
