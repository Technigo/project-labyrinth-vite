import { useStore } from "../stores/useStore";

export const Move = ({ direction }) => {
  const { restart, fetchAction } = useStore();

  const handleClick = event => {
    direction === "home" ? restart() : fetchAction(event.target.value);
  };

  return (
    <button
      onClick={handleClick}
      value={direction}>
      {`Go ${direction}`}
    </button>
  );
};
