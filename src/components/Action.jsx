import { Button } from "./Button";
import "../css/action.css";
import { useEffect, useRef } from "react";

export const Action = ({ action }) => {
  const detailsRef = useRef();

  useEffect(() => {
    detailsRef.current.addEventListener(
      "toggle",
      () =>
        detailsRef.current.open &&
        detailsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
    );
  });

  return (
    <details
      ref={detailsRef}
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
