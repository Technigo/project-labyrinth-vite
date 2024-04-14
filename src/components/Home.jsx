import { useLabyrinthStore } from "../store/useLabyrinthStore";

export const Home = () => {
  const { username, description, setNewUser, startGame } = useLabyrinthStore();
  const handleSubmit = (event) => {
    event.preventDefault();
    startGame(username);
    console.log(description.description);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={username}
            onChange={(event) => setNewUser(event.target.value)}
          />
        </label>
        <button type="submit">Start Game</button>
      </form>
    </>
  );
};
