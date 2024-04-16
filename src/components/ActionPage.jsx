import { useLabyrinthStore } from "../stores/useLabyrinthStore";

export const ActionPage = () => {
  const { coordinates, description, actions, makeMove } = useLabyrinthStore();

  return (
    <div>
      ActionPage
      <p>{coordinates}</p>
      <p>{description}</p>
      {actions.map((action, index) => (
        <button
          value={action.direction}
          key={index}
          onClick={e => makeMove(e.target.value)}
        >
          {action.direction}
        </button>
      ))}
    </div>
  );
};
