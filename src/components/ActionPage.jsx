import { useEffect } from "react"
import { useLabyrinthStore } from "../stores/useLabyrinthStore"
import "../style/ActionPage.css";

export const ActionPage = ({ changeBgImg }) => {
  const { coordinates, description, actions, makeMove, restart } =
    useLabyrinthStore()

  // useEffect that runs on mount of the component and changes the bg img
  useEffect(() => {
    changeBgImg(coordinates)
  }, [changeBgImg, coordinates])

  return (
    <div className="action-container">
      {/* ActionPage
      <p>{coordinates}</p> */}
      <p>{description}</p>
      {actions.map((action, index) => (
        <button
          value={action.direction}
          key={index}
          onClick={(e) => {
            const direction = e.target.value
            console.log(direction)
            makeMove(direction)
          }}>
          {action.direction}
        </button>
      ))}
      <button
        type="button"
        onClick={() => {
          restart()
          // change background back to start page
          changeBgImg("start")
        }}>
        Restart
      </button>
    </div>
  )
}
