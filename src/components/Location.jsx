// Location which renders
/**
 * location description
 * location actions
 */
import { useEffect } from 'react';
import { Action } from './Action';
import { useLabyrinthStore } from '../store/useLabyrinthStore';
import animation from '../assets/Animation.json';
import Lottie from 'lottie-react';
import '../styles/Location.css';

export const Location = ({ changeBackground }) => {
  const { description, loading, coordinates, history } = useLabyrinthStore();

  useEffect(() => {
    changeBackground(coordinates);
    console.log(coordinates);
  }, [changeBackground, coordinates]);

  return (
    <section className='location'>
      {loading && (
        <div id='lottie'>
          <Lottie
            animationData={animation}
            loop
            autoPlay
            style={{ width: 200, height: 200 }}
          />
        </div>
      )}
      {!loading && (
        <>
          <div className='current-description'>
            <h3>{description}</h3>
          </div>
          {history.length > 0 && (
            <div className='history'>
              <ul>
                {history.map((direction, index) => (
                  <li key={index}>{direction}</li>
                ))}
              </ul>
            </div>
          )}
          <Action changeBackground={changeBackground} />
        </>
      )}
    </section>
  );
};
