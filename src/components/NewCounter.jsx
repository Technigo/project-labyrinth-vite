import { useGameStore } from "../stores/useGameStore";

export const NewCounter = () => {
  const { count, increment } = useGameStore();

  return (
    <div>
      <p>Hello New Counter: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
