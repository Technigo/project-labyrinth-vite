import { useState, useEffect } from "react"
import useGameState from "../zustand/useGameState"


const GameComponent = ({ username }) => {
  const { gameState, setGameState } = useGameState()
  const [showInfo, setShowInfo] = useState({})
  const [showOptions, setShowOptions] = useState(true)

  useEffect(() => {
    startGame()
  }, [])

  const startGame = () => {
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
        console.error("Error:", error)
      })
  }

  const handleAction = (action) => {
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
        setGameState(data)
        setShowInfo({})
        setShowOptions((prevOptions) => {
          const newOptions = [...prevOptions]
          newOptions[action.index] = true
          return newOptions
        })
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }

  const handleShowInfo = (index) => {
    setShowInfo({ [index]: true })
    setShowOptions((prevOptions) => {
      const newOptions = [...prevOptions]
      newOptions[index] = false
      return newOptions
    })
  }

  useEffect(() => {
    setShowInfo({})
  }, [gameState?.actions])

  return (
    <div>
      <p>{gameState?.description}</p>

      <ul>
        {gameState?.actions &&
          gameState.actions.map((action, index) => (
            <li key={index}>
              {showInfo[index] ? (
                <p>{action.description}</p>
              ) : (
                
                  <button onClick={() => handleShowInfo(index)}>
                    More Info
                  </button>)}
                  {showOptions && (
                    <button onClick={() => handleAction(action)}>
                      {action.direction}
                    </button>
                  )}
                
             
            </li>
          ))}
      </ul>
    </div>
  )
}

export default GameComponent
