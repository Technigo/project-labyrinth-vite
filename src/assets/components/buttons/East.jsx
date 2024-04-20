import styled from "styled-components";

const Eastbtn = styled.div`
  padding: 10px;
`;

export const East = ({ handleClick }) => {
  console.log("Rendering East Button");

  return (
    <Eastbtn>
      <button onClick={handleClick} className="north-button">
        Go East
      </button>
    </Eastbtn>
  );
};
