

export const East = ({ handleClick }) => {
        console.log("Rendering East Button"); 

  return (
    <button onClick={handleClick} className="north-button">
      Go East
    </button>
  );
};