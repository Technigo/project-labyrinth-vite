import { appContentStore } from "../stores/appContentStore"

export const EndPage = () => {
  const {gameData, imageLink} = appContentStore()
 
  return (
    <div className="story-page">
      <div className="story-book">
        <img src={imageLink} alt={gameData.description} />
        <div className="story-info">
          <p>{gameData.description}</p>
          <p>The end!</p>
        </div>
      </div>
      <div className="arrow-container">
        <button>
          <p>Start over</p>
        </button>
      </div>
    </div>
  )
}