import NorthArrow from "/up-arrow.png"
import SouthArrow from "/down-arrow.png"
import EastArrow from "/right-arrow.png"
import WestArrow from "/left-arrow.png"
import "../ActionButtons/ActionButtons.css"

export const ActionButtons = ({ actions, handleAction }) => {
  return (
    <div className="action-buttons-container">
      <ul className="list-container">
        {actions.map((action, index) => (
          <li key={index}>
            <p className="action-description">{action.description}</p>
            <button
              className="action-button"
              onClick={() => handleAction(action.direction)}
            >
              {action.direction.toLowerCase() === "north" ? (
                <img src={NorthArrow} alt="North arrow" />
              ) : action.direction.toLowerCase() === "south" ? (
                <img src={SouthArrow} alt="South arrow" />
              ) : action.direction.toLowerCase() === "east" ? (
                <img src={EastArrow} alt="East arrow" />
              ) : (
                <img src={WestArrow} alt="West arrow" />
              )}
              Go {action.direction}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
