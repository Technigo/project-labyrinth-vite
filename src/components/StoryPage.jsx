import Lottie from "lottie-react"
import { appContentStore } from "../stores/appContentStore"
import { Options } from "./Options"
import cogWheels from "../assets/cog-wheels.json"
import "./StoryPage.css"

export const StoryPage = () => {
  const { loading, userName, gameData, directions, imageLink, toggleLoading, setGameData, setDirections, setImageLink } = appContentStore()

  const continueStory = (direction) => {
    toggleLoading();
    fetch(`https://labyrinth.technigo.io/action`, {
      method: "POST",
      body: JSON.stringify({
        username: userName,
        type: "move",
        direction: direction
      }),
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.json())
    .then((json) => {
      setGameData(json)
      if (json.actions.length === 1) {
        setDirections([json.actions[0].direction])
      } else if (json.actions.length === 2) {
        setDirections([json.actions[0].direction, json.actions[1].direction])
      }
      setImageLink(json.coordinates)
    })
    .catch((error) => {
      console.log("error:", error)
    })
    .finally(
      setTimeout(() => {
      toggleLoading()}, 2000)
    )
  }

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
            onClick={() => continueStory("North")}
            disabled={directions.length === 0 || !directions.includes("North")}
          >
            <p>Go North</p>
            <img src="/arrow-up.png" alt="up-arrow" />
          </button>
          <div className="side-arrows">
            <button
              onClick={() => continueStory("West")}
              disabled={directions.length === 0 || !directions.includes("West")}
            >
              <p>Go West</p>
              <img src="/arrow-left.png" alt="left-arrow" />
            </button>
            <button
              onClick={() => continueStory("East")}
              disabled={directions.length === 0 || !directions.includes("East")}
            >
              <p>Go East</p>
              <img src="/arrow-right.png" alt="right-arrow" />
            </button>
          </div>
          <button
            onClick={() => continueStory("South")}
            disabled={directions.length < 1 || !directions.includes("South")}
          >
            <p>Go South</p>
            <img src="/arrow-down.png" alt="down-arrow" />
          </button>
        </div>
      </div>
    )
  }
}
