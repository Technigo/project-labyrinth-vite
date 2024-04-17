// action description
// action button
// action onclick that calls the API  https://labyrinth.technigo.io/action
import { useLabyrinthStore } from '../store/useLabyrinthStore'
import '../styles/Action.css'

export const Action = () => {
  const { actions, updateActions } = useLabyrinthStore()

  return (
    <>
      {actions.map((action, index) => (
        <div key={index} className={action.direction}>
          <button
            id={action.direction}
            type="submit"
            value={action.direction}
            onClick={e => {
                const direction = e.target.value
                updateActions(direction)
            }}> 
            {action.direction}
          </button>
          <p>{action.description}</p>
        </div>
      ))}
    </>
  )
}
