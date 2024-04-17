import { appContentStore } from "../stores/appContentStore"
import { Options } from "./Options"
import temple from "../assets/pexels-julia-volk-5769409.jpg"
import "./StoryPage.css"

export const StoryPage = () => {
  const { loading, userName, gameData, toggleLoading } = appContentStore()

  const continueStory = (direction) => {
    toggleLoading();
    fetch(`https://labyrinth.technigo.io/start`, {
      method: "POST",
      body: JSON.stringify({
        username: userName,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setGameData(json);
      })
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
        </div>
        <div className="arrow-container">
          <button>
            <img src="/arrow-up.png" alt="up-arrow" />
          </button>
          <div className="side-arrows">
            <button>
              <img src="/arrow-left.png" alt="left-arrow" />
            </button>
            <button>
              <img src="/arrow-right.png" alt="right-arrow" />
            </button>
          </div>
          <button>
            <img src="/arrow-down.png" alt="down-arrow" />
          </button>
          <p>Coordinates: {gameData.coordinates}</p>
        </div>
      </div>
    )}
}
