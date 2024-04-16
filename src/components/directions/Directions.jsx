import { appContentStore } from '../../stores/appContentStore'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../directions/Directions.css'

export const Directions = () => {
  // Fetching data from the store
  const { gameData, increaseProgress, fetchDirection } = appContentStore()
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

    // add an if( loading) return...👇🏻
    document.addEventListener('keydown', handleKeyPress)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])
  const restartGame = () => {
    navigate('/game')
  }

  // Function to handle click on direction
  const handleDirectionClick = (action) => {
    increaseProgress()
    fetchDirection(action.type, action.direction)
  }

  // Rendering the directions
  return (
    <>
      <h2>Choose a Direction:</h2>
      <ul>
        {gameData.actions &&
          gameData.actions.map((action, index) => (
            <div key={index}>
              {action.direction === 'North' && (
                <button
                  onClick={() => handleDirectionClick(action)}
                  id="northBtn"
                  tabIndex="0"
                >
                  ⬆️
                </button>
              )}
              {action.direction === 'South' && (
                <button
                  onClick={() => handleDirectionClick(action)}
                  id="southBtn"
                  tabIndex="0"
                >
                  ⬇️
                </button>
              )}
              {action.direction === 'East' && (
                <button
                  onClick={() => handleDirectionClick(action)}
                  id="eastBtn"
                  tabIndex="0"
                >
                  ➡️
                </button>
              )}
              {action.direction === 'West' && (
                <button
                  onClick={() => handleDirectionClick(action)}
                  id="westBtn"
                  tabIndex="0"
                >
                  ⬅️
                </button>
              )}
              <button onClick={() => handleDirectionClick(action)}>
                {action.direction}
              </button>
              <p>{action.description}</p>
            </div>
          ))}
        {/* not working for now👇🏻 */}
        {gameData.coordinates !== '0,0' && (
          <button onClick={() => restartGame()}>Restart Game</button>
        )}
      </ul>
    </>
  )
}
