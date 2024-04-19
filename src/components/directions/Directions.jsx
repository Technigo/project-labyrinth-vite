import { useAppContentStore } from '../../stores/useAppContentStore'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import btnEast from '/btn-east.png'
import btnNorth from '/btn-north.png'
import btnSouth from '/btn-south.png'
import btnWest from '/btn-west.png'

import '../directions/Directions.css'

export const Directions = () => {
  // Fetching data from the store
  const { gameData, fetchDirection, toggleDirections, showDirections } =
    useAppContentStore()
  const navigate = useNavigate()
  // control pressing of keyboard and pass the value to the handleclick function
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowUp') {
        handleDirectionClick({ type: 'move', direction: 'North' })
      } else if (e.key === 'ArrowDown') {
        handleDirectionClick({ type: 'move', direction: 'South' })
      } else if (e.key === 'ArrowLeft') {
        handleDirectionClick({ type: 'move', direction: 'West' })
      } else if (e.key === 'ArrowRight') {
        handleDirectionClick({ type: 'move', direction: 'East' })
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const restartGame = () => {
    navigate('/')
  }

  // Function to handle click on direction
  const handleDirectionClick = (action) => {
    // increaseProgress();
    fetchDirection(action.type, action.direction)
    // set the showdirections to false to show just the directions button
    toggleDirections(!showDirections)
  }

  // Rendering the directions
  return (
    <>
      <h2 className="directions-title">Choose a Direction:</h2>
      <ul>
        {gameData.actions &&
          gameData.actions.map((action, index) => (
            <div className="center-btns" key={index}>
              {action.direction === 'North' && (
                <button
                  onClick={() => handleDirectionClick(action)}
                  id="northBtn"
                  tabIndex="0"
                >
                  <img className="direction-btn" src={btnNorth} />
                </button>
              )}
              {action.direction === 'South' && (
                <button
                  onClick={() => handleDirectionClick(action)}
                  id="southBtn"
                  tabIndex="0"
                >
                  <img className="direction-btn" src={btnSouth} />
                </button>
              )}
              {action.direction === 'East' && (
                <button
                  onClick={() => handleDirectionClick(action)}
                  id="eastBtn"
                  tabIndex="0"
                >
                  <img className="direction-btn" src={btnEast} />
                </button>
              )}
              {action.direction === 'West' && (
                <button
                  onClick={() => handleDirectionClick(action)}
                  id="westBtn"
                  tabIndex="0"
                >
                  <img className="direction-btn" src={btnWest} />
                </button>
              )}
              <div className="direction-wrapper">
                <button
                  className="btn"
                  onClick={() => handleDirectionClick(action)}
                >
                  {action.direction}
                </button>
                <p className="direction-text">{action.description}</p>
              </div>
            </div>
          ))}
        {/* Restart game*/}
        {gameData.coordinates !== '0,0' && (
          <button className="btn" onClick={() => restartGame()}>
            Restart Game
          </button>
        )}
      </ul>
    </>
  )
}
