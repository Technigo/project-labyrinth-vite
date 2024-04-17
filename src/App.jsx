import { appContentStore } from "./stores/appContentStore"
import { StartPage } from "./components/StartPage"
import { StoryPage } from "./components/StoryPage"

export const App = () => {
  const { gameData } = appContentStore()

  if (gameData) {
    return (
      <StoryPage />
    )
  } else {
    return (
    <div>
      Labyrinth Project 
      <StartPage />
    </div>
    )
  }
}
