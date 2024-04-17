import { useState, useEffect, useCallback } from "react"
import useGameState from "../zustand/useGameState"
import { CompassAnimation } from "./CompassAnimation"
import { useAudio } from "./UseAudio"
import "/src/css/gameComponent.css"

const GameComponent = ({ username }) => {
  const { gameState, setGameState } = useGameState()
  const [showInfo, setShowInfo] = useState({})
  const [showOptions, setShowOptions] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const { isPlaying, toggleAudio } = useAudio()

  const startGame = useCallback(() => {
    setIsLoading(true)
    fetch("https://labyrinth.technigo.io/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setGameState(data)
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
    setIsLoading(true);
    fetch("https://labyrinth.technigo.io/action", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        type: action.type,
        direction: action.direction,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setGameState(data);
        setShowInfo({});
        setShowOptions((prevOptions) => {
          return prevOptions.filter((option, index) => index !== action.index);
        });
      })
      .catch((error) => {
        console.error("Error navigating to next question:", error);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  };

  const handleShowInfo = (index) => {
    setShowInfo({ [index]: true })
    setShowOptions((prevOptions) => {
      const newOptions = [...prevOptions]
      newOptions[index] = false
      return newOptions
    })
  }

  return (
    <div>
      {isLoading ? (
        <CompassAnimation />
      ) : (
        <>
          <p>{gameState?.description}</p>
          <button className="audio-button" onClick={toggleAudio}>
            {isPlaying ? "Pause" : "Play"} Audio
          </button>
          <ul>
            {gameState?.actions &&
              gameState.actions.map((action, index) => (
                <li key={index}>
                  {showInfo[index] ? (
                    <p>{action.description}</p>
                  ) : (
                    <button onClick={() => handleShowInfo(index)}>
                      More Info
                    </button>
                  )}
                  {showOptions && (
                    <button onClick={() => handleAction(action)}>
                      {action.direction}
                    </button>
                  )}
                </li>
              ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default GameComponent
