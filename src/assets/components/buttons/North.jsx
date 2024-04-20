


export const North = ({ handleClick }) => {
  console.log("Rendering North Button");

  return (
    <button onClick={handleClick} className="north-button">
      Go North
    </button>
  );
};
