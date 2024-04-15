import { appContentStore } from "../stores/appContentStore"; // Assuming the path is correct

export const Directions = () => {
  // Fetching data from the store
  const { gameData, increaseProgress, fetchDirection } = appContentStore();

  // Destructuring relevant data from gameData
  const { actions } = gameData;
  console.log(actions);

  // Function to handle click on direction
  const handleDirectionClick = (direction, type) => {
    // Handle logic for the direction click
    console.log("Clicked direction:", direction);
    increaseProgress(); // Example: Increase progress when direction is clicked
    fetchDirection(type, direction);
  };

  // Rendering the directions
  return (
    <div>
      <h2>Choose a Direction:</h2>
      <ul>
        {actions &&
          actions?.map((action, index) => (
            <div key={index}>
              <button
                onClick={() =>
                  handleDirectionClick(action.direction, action.type)
                }
              >
                {action.direction}
              </button>
              <p>{action.description}</p>
            </div>
          ))}
      </ul>
    </div>
  );
};
