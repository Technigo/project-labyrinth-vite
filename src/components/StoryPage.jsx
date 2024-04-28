import Lottie from "lottie-react"
import { appContentStore } from "../stores/appContentStore"
import { Options } from "./Options"
import cogWheels from "../assets/cog-wheels.json"
import "./StoryPage.css"

export const StoryPage = () => {
  const { loading, gameData, directions, imageLink, continueStory } = appContentStore()

  if (loading) {
    return (
      <div className="loading-page">
        <p>Loading...</p>
        <Lottie
          animationData={cogWheels}
          loop
          autoplay
          style={{ width: 400, height: 400 }}
        />
      </div>
    )
  }
  if (gameData) {
    return (
      <div className="story-page">
        <div className="story-book">
          <img src={imageLink} alt={gameData.description} />
          <div className="story-info">
            <p>{gameData.description}</p>
            <Options />
            <p>{gameData.actions.length > 0 ? "Where do you go?" : ""}</p>
          </div>
        </div>
        <div className="arrow-container">
          <button
            className="north"
            onClick={() => continueStory("North")}
            disabled={directions.length === 0 || !directions.includes("North")}
          >
            <p>Go North</p>
            <img className="arrow" src="/arrow-up.png" alt="up-arrow" />
          </button>
          <button
            className="west"
            onClick={() => continueStory("West")}
            disabled={directions.length === 0 || !directions.includes("West")}
          >
            <p>Go West</p>
            <img className="arrow" src="/arrow-left.png" alt="left-arrow" />
          </button>
          <button
            className="east"
            onClick={() => continueStory("East")}
            disabled={directions.length === 0 || !directions.includes("East")}
          >
            <p>Go East</p>
            <img className="arrow" src="/arrow-right.png" alt="right-arrow" />
          </button>
          <button
            className="south"
            onClick={() => continueStory("South")}
            disabled={directions.length < 1 || !directions.includes("South")}
          >
            <p>Go South</p>
            <img className="arrow" src="/arrow-down.png" alt="down-arrow" />
          </button>
        </div>
      </div>
    );
  }
}
