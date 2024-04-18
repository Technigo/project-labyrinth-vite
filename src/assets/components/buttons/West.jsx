
export const West = ({ handleClick }) => {
        console.log("Rendering West Button"); 

  return (
    <button onClick={handleClick} className="north-button">
      Go West
    </button>
  );
};

