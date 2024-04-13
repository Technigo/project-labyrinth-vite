export const Action = ({ action }) => {
  console.log(action);
  return (
    <details>
      <summary>{`Look ${action.direction}`}</summary>
      {action.description}
    </details>
  );
};
