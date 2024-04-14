import { Button } from "./Button";
import "../css/action.css";

export const Action = ({ action }) => {
  return (
    <details
      className="situation-details"
      name="situation-details">
      <summary>{`Look ${action.direction}`}</summary>
      {action.description}
      <Button
        key={`m-${action.direction}`}
        direction={action.direction}
        action={action.description}
      />
    </details>
  );
};
