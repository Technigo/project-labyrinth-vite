
import { useLabyrinthStore } from '../store/useLabyrinthStore'
import '../styles/Action.css'
import { useNavigate } from 'react-router-dom'

export const Action = () => {
  const { actions, updateActions, updateLoggedIn, changeLocation, username } =
    useLabyrinthStore();
  const navigate = useNavigate();

  const handleAction = async (direction) => {
      try {
        await changeLocation(username, direction, "move");
      } catch (error) {
        console.log("error:", error);
      }
    };
  
  return (
    <>
      {actions.map((action, index) => (
        <div key={index} className={action.direction}>
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
          <p>{action.description}</p>
        </div>
      ))}
      <button type="submit" onClick={() => {
        navigate("/") 
        updateLoggedIn(false)}}>Restart</button>
    </>
  )
}
