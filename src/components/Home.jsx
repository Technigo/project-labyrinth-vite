import { useState, useEffect, useRef } from "react";
import { useUserStore } from "../stores/useUserStore";
import { Labyrinth } from "./Labyrinth";

export const Home = () => {
  const { userName, setUserName } = useUserStore();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUserName = inputRef.current.value;
    setUserName(newUserName);
    setIsSubmitted(true);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      {!isSubmitted && (
        <form onSubmit={handleSubmit}>
          <label>
            Enter your username:
            <input
              type="text"
              ref={inputRef}
              defaultValue={userName}
              placeholder="New username"
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
      {isSubmitted && <Labyrinth />}
    </div>
  );
};
