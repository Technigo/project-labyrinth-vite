import { useState, useEffect, useCallback } from "react"
import { useGameState } from "../zustand/useGameState"
import { CompassAnimation } from "./CompassAnimation"
import { useAudio } from "./UseAudio"
import "/src/css/gameComponent.css"

export const GameComponent = ({ username }) => {
  const { gameState, setGameState } = useGameState()
  const [showInfo, setShowInfo] = useState({})
  const [showOptions, setShowOptions] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const { isPlaying, toggleAudio } = useAudio()
  const [history, setHistory] = useState([])
  const [showHistory, setShowHistory] = useState(false)

  const startGame = useCallback(() => {
    setIsLoading(true)
    setGameState(username)
      .then((data) => {
        setShowInfo({})
        setShowOptions(new Array(data.actions.length).fill(true))
      })
      .catch((error) => {
        console.error("Error starting game:", error)
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false)
        }, 2000)
      })
  }, [setGameState, username])

  useEffect(() => {
    startGame()
  }, [startGame])

  const handleAction = (action) => {
    setIsLoading(true)
    setGameState(username, action.type, action.direction)
      .then(() => {
        setShowInfo({})
        setShowOptions((prevOptions) => {
          return prevOptions.filter((option, index) => index !== action.index)
        })

        setHistory((prevHistory) => [...prevHistory, action])
      })
      .catch((error) => {
        console.error("Error navigating to next question:", error)
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false)
        }, 2000)
      })
  }

  const handleToggleInfo = (index) => {
    setShowInfo((prevShowInfo) => ({
      ...prevShowInfo,
      [index]: !prevShowInfo[index],
    }))
  }

  const handlePlayAgain = () => {
    startGame()
    window.location.href = "/"
  }

  const handleToggleHistory = () => {
    setShowHistory((prevShowHistory) => !prevShowHistory)
  }

  return (
    <div>
      {isLoading ? (
        <CompassAnimation />
      ) : (
        <div className="game-container">
          <p className="showinfo">{gameState?.description}</p>
          <button className="audio-button" onClick={toggleAudio}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <ul>
            {gameState?.actions &&
              gameState.actions.map((action, index) => (
                <li key={index}>
                  <div>
                    <button
                      onClick={() => handleToggleInfo(index)}
                      className="info-button"
                    >
                      {showInfo[index] ? "Hide Info" : "More Info"}
                    </button>
                    {showInfo[index] && <p>{action.description}</p>}
                  </div>
                  {showOptions && (
                    <button
                      className="direction-button"
                      onClick={() => handleAction(action)}
                    >
                      {action.direction}
                    </button>
                  )}
                </li>
              ))}
          </ul>

          {gameState?.actions?.length === 0 && (
            <button onClick={handlePlayAgain}>Play Again</button>
          )}
          <button onClick={handleToggleHistory}>
            {showHistory ? "Hide History" : "Show History"}
          </button>
          {showHistory && (
            <ul className="history-container">
              {history.map((action, index) => (
                <li key={index}>{action.direction}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
