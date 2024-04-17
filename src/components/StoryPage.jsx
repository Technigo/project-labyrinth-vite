import { appContentStore } from "../stores/appContentStore"
import { Options } from "./Options"
import temple from "../assets/pexels-julia-volk-5769409.jpg"
import "./StoryPage.css"

export const StoryPage = () => {
  const { loading, userName, gameData, directions, toggleLoading, setGameData, setDirections } = appContentStore()
  //const disableButton = directions.length !== 0 && !directions.includes("West")

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
      }})
    .catch((error) => {
      console.log("error:", error);
    })
    .finally(toggleLoading())
  }

  if (loading) {
    return (
      <>
        <p>Loading...</p>
      </>
    )
  }
  if (gameData) {
    return (
      <div className="story-page">
        <div className="story-book">
          <img src={temple} alt="Temple in the djungle." />
          <p>{gameData.description}</p>
          <Options />
          <p>Where do you go?</p>
        </div>
        <div className="arrow-container">
          <button
            onClick={() => continueStory("North")}
            disabled={directions.length !== 0 && !directions.includes("North")}
          >
            <p>Go North</p>
            <img src="/arrow-up.png" alt="up-arrow" />
          </button>
          <div className="side-arrows">
            <button
              onClick={() => continueStory("West")}
              disabled={directions.length !== 0 && !directions.includes("West")}
            >
              <p>Go West</p>
              <img src="/arrow-left.png" alt="left-arrow" />
            </button>
            <button
              onClick={() => continueStory("East")}
              disabled={directions.length !== 0 && !directions.includes("East")}
            >
              <p>Go East</p>
              <img src="/arrow-right.png" alt="right-arrow" />
            </button>
          </div>
          <button
            onClick={() => continueStory("South")}
            disabled={directions.length !== 0 && !directions.includes("South")}
          >
            <p>Go South</p>
            <img src="/arrow-down.png" alt="down-arrow" />
          </button>
          <p>Coordinates: {gameData.coordinates}</p>
          <p>Directions: {directions}</p>
        </div>
      </div>
    );}
}
