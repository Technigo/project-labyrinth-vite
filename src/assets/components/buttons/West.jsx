import styled from "styled-components";

const Westbtn = styled.div`
  padding: 10px;
`;

export const West = ({ handleClick }) => {
  console.log("Rendering West Button");

  return (
    <Westbtn>
      <button onClick={handleClick} className="north-button">
        Go West
      </button>
    </Westbtn>
  );
};
