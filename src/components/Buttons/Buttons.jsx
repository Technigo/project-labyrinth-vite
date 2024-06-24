import NorthArrow from "/arrowNorth.png"
import EastArrow from "/arrowEast.png"
import SouthArrow from "/arrowSouth.png"
import WestArrow from "/arrowWest.png"
import "../Buttons/Buttons.css"

export const ActionButtons = ({ actions, handleAction }) => {
  const getArrowImage = (direction) => {
    switch (direction.toLowerCase()) {
      case "north":
        return <img src={NorthArrow} alt="North arrow" />
      case "south":
        return <img src={SouthArrow} alt="South arrow" />
      case "east":
        return <img src={EastArrow} alt="East arrow" />
      case "west":
        return <img src={WestArrow} alt="West arrow" />
      default:
        return null
    }
  }

  return (
    <div className="action-buttons-container">
      <ul className="list-container">
        {actions.map(({ description, direction }, index) => (
          <li key={`${direction}-${index}`}>
            <p className="action-description">{description}</p>
            <button
              className="action-button"
              onClick={() => handleAction(direction)}
            >
              {getArrowImage(direction)}
              Go {direction}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
