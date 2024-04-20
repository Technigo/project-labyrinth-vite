import styled from "styled-components";

// Styled components for north button
const Northbtn = styled.div`
padding: 10px;
`

export const North = ({ handleClick }) => {
  console.log("Rendering North Button");

  return (
    <Northbtn>
      <button onClick={handleClick}>Go North</button>
    </Northbtn>
  );
};
