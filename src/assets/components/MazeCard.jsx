import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Description = styled.p`
  font-size: 20px;
  color: #333;
`;

const DirectionContainer = styled.div`
  margin-top: 10px;
`;

const DirectionDescription = styled.p`
  font-size: 18px;
  color: #666;
  justify-content: center;
  align-items: center;
`;

const DirectionButton = styled.button`
  background-color: #4caf50;
  font-weight: 600;
  color: white;
  padding: 10px 15px;
  margin: 5px auto;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

export const MazeCard = ({ description, actions, performAction }) => {
  const [showDirections, setShowDirections] = useState(false);
  console.log(showDirections);
  return (
    <Container>
      <button
        onClick={() =>
          setShowDirections((showDirections) => {
            console.log("345");
            return !showDirections;
          })
        }
      >
        {showDirections ? "Show Location" : "Show Directions"}
      </button>
      {!showDirections ? (
        <Description>{description}</Description>
      ) : (
        actions.map((action) => (
          <DirectionContainer key={action.description}>
            <DirectionDescription>{action.description}</DirectionDescription>
            <DirectionButton
              onClick={() => performAction(action.type, action.direction)}
            >
              Go {action.direction}
            </DirectionButton>
          </DirectionContainer>
        ))
      )}
    </Container>
  );
};
