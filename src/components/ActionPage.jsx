import { useLabyrinthStore } from "../stores/useLabyrinthStore";

export const ActionPage = () => {
  const { coordinates, description, actions, makeMove, restart } =
    useLabyrinthStore();

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
