import useLabyrinthStore from "../stores/useLabyrinthStore";

const GamePage = () => {
  const { description, actions, loading, error, performAction } =
    useLabyrinthStore();

  const handleAction = async (direction) => {
    await performAction("move", direction);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
          <p>{description}</p>
          <ul>
            {actions.map((action) => (
              <li key={action.direction}>
                <button
                  onClick={() => handleAction(action.direction)}
                  disabled={loading}
                >
                  {action.direction}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default GamePage;

