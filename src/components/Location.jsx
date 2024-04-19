import { useEffect, useRef } from 'react';
import { Action } from './Action';
import { useLabyrinthStore } from '../store/useLabyrinthStore';
import animation from '../assets/Animation.json';
import Lottie from 'lottie-react';
import '../styles/Location.css';

export const Location = ({ changeBackground }) => {
  const { description, loading, coordinates, history } = useLabyrinthStore();
  const historyRef = useRef()

  useEffect(() => {
    changeBackground(coordinates);
    console.log(coordinates);
  }, [changeBackground, coordinates]);

  const showHistory = () => {
    historyRef.current.style.display = "flex";
  }

  const hideHistory = () => {
    historyRef.current.style.display = "none";
  }

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
          <div className='history' ref={historyRef}>
            {history.length > 0 && (
                <ul>
                  {history.map((direction, index) => (
                    <li key={index}>
                      {direction}
                      {index < history.length - 1 && (
                        <>
                          <br />
                          <span>↓</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
            )}
            <button className="hide-history" onClick={hideHistory}>Hide</button>
          </div>
          <button className="history-button" onClick={showHistory}> <h2>Your path</h2></button>
          <Action changeBackground={changeBackground} />
        </>
      )}
    </section>
  );
};
