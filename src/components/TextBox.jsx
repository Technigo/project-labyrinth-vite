import { useGameStore } from "../stores/useGameStore";
import { useState } from "react";
import "./style/TextBox.css";

export const TextBox = () => {
  const { labData } = useGameStore();

  const [showDirections, setShowDirections] = useState(false);

  const handleShow = () => {
    setShowDirections(!showDirections);
  };

  return (
    <>
      <button className="textbox-button" onClick={handleShow}>
        {showDirections ? "Show Description" : "Show Directions"}
      </button>
      {showDirections ? (
        <div className="textbox textbox-direction">
          {labData.actions
            ? labData.actions.map((direction, index) => (
                <div className="direction-cards" key={index}>
                  <p>{direction.description} </p>
                </div>
              ))
            : "No Data"}
        </div>
      ) : (
        <div className="textbox textbox-main">
          <p>{labData.description}</p>
        </div>
      )}
    </>
  );
};
