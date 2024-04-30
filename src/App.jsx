import { appContentStore } from "./stores/appContentStore"
import { StartPage } from "./components/StartPage"
import { StoryPage } from "./components/StoryPage"
import { EndPage } from "./components/EndPage"

export const App = () => {
  const { gameData } = appContentStore()

  if (gameData) {
    if (gameData.actions.length === 0) {
      return <EndPage />
    } else if (gameData.actions.length > 0) {
      return <StoryPage />
    }
  } else {
    return (
    <div className="start-div"> 
      <StartPage />
    </div>
    )
  }
}
