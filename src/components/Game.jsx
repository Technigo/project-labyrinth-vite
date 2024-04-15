import { AppContentStore } from '../stores/appContentStore'

export const Game = () => {
  const { gameData, progress } = AppContentStore()
  return (
    <div>
      <button>Show Directions</button>
      <p>Current Level: {progress}</p>
      <p>Description: {gameData?.description}</p>
    </div>
  )
}
