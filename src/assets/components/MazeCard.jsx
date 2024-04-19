import { useState } from "react";

import styled from "styled-components";

// Styled components
const Container = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Description = styled.p`
  font-size: 16px;
  color: #333;
`;

const DirectionContainer = styled.div`
  margin-top: 10px;
`;

const DirectionDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

const DirectionButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  margin: 5px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const MazeCard = ({
  description,
  actions,
  coordinates,
  performAction,
}) => {
  const [showDirections, setShowDirections] = useState(false);
  const [showDescription, setShowDescription] = useState(true);

  const endPosition = coordinates === "1,3";

  const toggleDirections = () => {
    setShowDirections(!showDirections);
    setShowDescription(!showDescription);
  };
    console.log("Description in MazeCard:", description);
    console.log("Actions in MazeCard:", actions);

  if (endPosition) {
    return (
      <Container>
        <Description>{description}</Description>
      </Container>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={toggleDirections}
        className="toggle-button"
      >
        {showDirections ? "Show Location" : "Show Directions"}
      </button>
      {showDescription && <Description>{description}</Description>}
      {showDirections && (
        <div>
          {actions.map((item) => (
            <DirectionContainer key={item.description}>
              <DirectionDescription>{item.description}</DirectionDescription>
              <DirectionButton
                type="button"
                onClick={() => performAction(item.type, item.direction)}
              >
                Go {item.direction}
              </DirectionButton>
            </DirectionContainer>
          ))}
        </div>
      )}
    </>
  );
};
