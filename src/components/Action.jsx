
import { useLabyrinthStore } from '../store/useLabyrinthStore'
import { useRef } from "react"
import '../styles/Action.css'
import eye from '../assets/eye.svg'

export const Action = ({changeBackground}) => {
  const {
    actions,
    updateActions,
    updateLoggedIn,
    changeLocation,
    username,
    updateCoordinates,
    updateHistory,
  } = useLabyrinthStore();
    const directionInfo = useRef()

  const handleAction = async (direction) => {
      try {
        await changeLocation(username, direction, "move");
        updateHistory(direction);

      } catch (error) {
        console.log("error:", error);
      }
    };
  
  return (
    <>
      {actions.map((action, index) => (
        <div key={index} className={action.direction}>
          <input type="checkbox" id="toggleCheckbox"/>
          <label htmlFor="toggleCheckbox">
          <img src={eye} className="eye" alt="see more"/></label>
          <div ref={directionInfo} className="direction-info">
          <p ref={directionInfo}>{action.description}</p>
          <button
            id={action.direction}
            type="submit"
            value={action.direction}
            onClick={e => {
                const directionChoice = e.target.value
                updateActions(directionChoice)
                handleAction(directionChoice);
            }}> 
            {action.direction}
          </button>
          </div>
        </div>
      ))}
      <button className="restart" onClick={() => {
        updateLoggedIn(false)
        updateCoordinates("start")
        changeBackground("start")}}>Restart</button>
    </>
  )
}
