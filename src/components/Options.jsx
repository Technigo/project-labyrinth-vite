import { appContentStore } from "../stores/appContentStore"

export const Options = () => {
  const { gameData } = appContentStore()
  const optionOne = gameData.actions[0]
  const optionTwo = gameData.actions[1]

  if (gameData.actions.length === 0) {
    return (
      <p>The end!</p>
    )
  } else if (gameData.actions.length === 1) {
    return (
      <p>
        To the {optionOne.direction}{" "}
        {optionOne.description.replace(
        optionOne.description.charAt(0),
        optionOne.description.charAt(0).toLowerCase()
        )}
      </p>
    )
  } else {
    return (
      <div>
        <p>
          To the {optionOne.direction}{" "}
          {optionOne.description.replace(
            optionOne.description.charAt(0),
            optionOne.description.charAt(0).toLowerCase()
          )}
        </p>
        <p>
          To the {optionTwo.direction}{" "}
          {optionTwo.description.replace(
            optionTwo.description.charAt(0),
            optionTwo.description.charAt(0).toLowerCase()
          )}
        </p>
      </div>
    )
  }
}

