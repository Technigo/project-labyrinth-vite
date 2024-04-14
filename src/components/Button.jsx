import { useStore } from "../stores/useStore";
import "../css/button.css";

export const Button = ({ direction }) => {
  const { restart, fetchAction } = useStore();

  const handleClick = event => {
    direction === "home" ? restart() : fetchAction(event.target.value);
  };

  return (
    <button
      className="btn move"
      onClick={handleClick}
      value={direction}>
      {`Go ${direction}`}
    </button>
  );
};
