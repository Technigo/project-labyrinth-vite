import { useLabyrinthStore } from "../stores/useLabyrinthStore";

export const ActionPage = () => {
  const { coordinates, description, actions } = useLabyrinthStore();

  return (
    <div>
      ActionPage
      <p>{coordinates}</p>
      <p>{description}</p>
      {actions.map((action, index) => (
        <p key={index}>{action.direction}</p>
      ))}
    </div>
  );
};
