import { useState } from 'react'
import { appContentStore } from '../stores/appContentStore'
import { Directions } from './directions/Directions'

export const Game = () => {
  const { gameData, progress } = appContentStore()
  const [showDirections, setShowDirections] = useState(false)

  // add an if( loading) return...👇🏻
  const toggleDirections = () => {
    setShowDirections(!showDirections)
  }

  return (
    <div className="directionContainer">
      <button onClick={toggleDirections}>
        {showDirections ? 'Show Location' : 'Show Directions'}
      </button>
      {!showDirections && (
        <>
          <p>Current Level: {progress}</p>
          <p>Description: {gameData?.description}</p>
        </>
      )}

      {showDirections && <Directions />}
    </div>
  )
}
