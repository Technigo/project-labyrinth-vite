import { useStore } from "../stores/useStore";

export const NewCounter = () => {
  const { count, increment } = useStore();

  return (
    <div>
      <p>Hello New Counter: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
