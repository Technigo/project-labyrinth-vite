import { useUserStore } from "../stores/useStore";

export const Start = () => {
  const { userName, setUserName } = useUserStore();
  console.log(userName);
  return (
    <div className="start-title">
      <h1>The Maze</h1>
      <h2>Enter the labyrinth on your own risk.</h2>
      <h2>Can you find a way out of the maze?</h2>
      <form className="start-form">
        <label htmlFor="username-input">
          Enter your username:
          <input
            type="text"
            className="username-input"
            id="username-input"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <button type="submit">Submit</button>
        </label>
      </form>
    </div>
  );
};
