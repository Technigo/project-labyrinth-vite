import { appContentStore } from "../stores/appContentStore"

export const EndPage = () => {
  const {gameData, imageLink, startOver} = appContentStore()
 
  return (
    <div className="story-page">
      <div className="story-book">
        <img src={imageLink} alt={gameData.description} />
        <div className="story-info">
          <p>{gameData.description}</p>
          <p id="the-end">The end!</p>
        </div>
      </div>
      <div className="end-container">
        <button onClick={() => startOver()}>
          <p>Start over</p>
        </button>
      </div>
    </div>
  );
}