import { useStore } from "../stores/useStore";
import "../css/button.css";

export const Button = ({ direction, action }) => {
  const { fetchAction, setHistory } = useStore();
  const restart = useStore(state => state.restart);
  const setLoading = useStore(state => state.setLoading);

  const handleClick = event => {
    setLoading();
    if (direction === "home") {
      restart();
    } else {
      fetchAction(event.target.value);
      setHistory({ action: action, move: direction });
    }
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
