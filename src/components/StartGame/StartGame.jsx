import { useLabyrinthStore } from "../../stores/useLabyrinthStore"
import { useState, useEffect } from "react"
import { UserInput } from "../UserInput/UserInput"
import { ActionButtons } from "../ActionButtons/ActionButtons"

import Lottie from "lottie-react"
import loadingAnimation from "../../assets/compass.json"
import "../../components/StartGame/StartGame.css"

export const StartGame = () => {
  const {
    loading,
    error,
    username,
    description,
    actions,
    startGame,
    gameAction,
  } = useLabyrinthStore()

  const [usernameInput, setUsernameInput] = useState("")
  const [gameStarted, setGameStarted] = useState(false)

  useEffect(() => {
    if (gameStarted && usernameInput) {
      const fetchDirection = async () => {
        try {
          await startGame(usernameInput)
        } catch (error) {
          console.error("Error fetching directions:", error)
        }
      }

      fetchDirection()
    }
  }, [startGame, usernameInput, gameStarted])

  const handleStartGame = () => {
    setGameStarted(true)
  }

  const handleAction = (direction) => {
    gameAction(username, direction, "move")
  }

  return (
    <>
      {!gameStarted && (
        <div className="enter-game-text">
          <h1>The Maze</h1>
          <h2>
            Enter the labyrinth on your own risk. Can you find a way out of the
            maze?
          </h2>
          <UserInput
            setUsernameInput={setUsernameInput}
            handleStartGame={handleStartGame}
          />
        </div>
      )}
      {loading && (
        <div className="animation-compass">
          <Lottie animationData={loadingAnimation} />
        </div>
      )}
      {error && <p>Error: {error}</p>}
      {gameStarted && !loading && !error && username && (
        <>
          <p className="description">{description}</p>
          <ActionButtons actions={actions} handleAction={handleAction} />
        </>
      )}
    </>
  )
}
