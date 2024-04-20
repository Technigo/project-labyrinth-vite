import styled from "styled-components";

const Southbtn = styled.div`
  padding: 10px;
`;

export const South = ({ handleClick }) => {
  console.log("Rendering South Button");

  return (
    <Southbtn>
      <button onClick={handleClick}>Go South</button>
    </Southbtn>
  );
};
