import { useEffect } from 'react';
import useLabyrinthStore from '../stores/useLabyrinthStore';
import './GamePage.css';

const GamePage = ({ changeBgImg }) => {
  const { coordinates, description, actions, loading, error, performAction, restart } =
    useLabyrinthStore();

  useEffect(() => {
    changeBgImg(coordinates);
  }, [changeBgImg, coordinates]);

  const handleAction = async (direction) => {
    await performAction('move', direction);
  };

  return (
    <div className="game-container">
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
          <button
            className="restart-button"
            type="button"
            onClick={() => {
              restart();
              changeBgImg('start');
            }}
          >
            Restart
          </button>
        </>
      )}
    </div>
  );
};

export default GamePage;

