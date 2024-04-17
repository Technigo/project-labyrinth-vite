import { useGameStore } from "../stores/useGameStore";

export const ActionButtons = () => {
  const { actions, handleAction } = useGameStore(); 

  return (
    <div>
      {actions.map((action, index) => (
        <button key={index} onClick={() => handleAction(action)}>
          {action.description}
        </button>
      ))}
    </div>
  );
};

