import { useEffect } from 'react';
import useLabyrinthStore from '../stores/useLabyrinthStore';
import { LoadingAnimation } from './LoadingAnimation';
import './GamePage.css';

export const GamePage = ({ changeBgImg }) => {
  const { coordinates, description, actions, loading, error, performAction, restart } =
    useLabyrinthStore();

  useEffect(() => {
    changeBgImg(coordinates);
  }, [changeBgImg, coordinates]);

  const handleAction = async (direction) => {
    await performAction('move', direction);
  };

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <>
      <div className="game-container">
        {error && <p>Error: {error}</p>}
        {!error && (
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
      <button
        className="restart-button"
        type="button"
        onClick={() => {
          restart();
          changeBgImg('start');
        }}
      >
        RESTART
      </button>
    </>
  );
};


