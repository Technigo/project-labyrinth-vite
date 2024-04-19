import { useLabyrinthStore } from "../stores/useLabyrinthStore";
import { Loading } from "./Loading";

export const Home = () => {
  const { userName, setUserName, fetchStart, loading } = useLabyrinthStore();

  const handleStartSubmit = () => {
    if (userName === "") {
      alert("Please set a username.");
    } else {
      fetchStart(userName);
    }
  };

  return (
    <div className="input-page">
      {!loading && (
        <div>
          <label> Enter your username </label>
          <input
            className="input-field"
            id="user-input"
            type="text"
            placeholder="New username"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
          <button onClick={handleStartSubmit}>Start Labyrinth</button>
        </div>
      )}

      {loading && <div>Entering the Labyrinth...</div>}
    </div>
  );
};

/* import { useState, useEffect, useRef } from "react";
import { useUserStore } from "../stores/useUserStore";
import { Labyrinth } from "./Labyrinth";

export const Home = () => {
  const { userName, setUserName, fetchStartData } = useUserStore();
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
              required
            />
          </label>
          <button type="submit" onClick={() => {userName}}>Submit</button>
        </form>
      )}
      {isSubmitted && <Labyrinth />}
    </div>
  );
};
 */
