import { useGameStore } from "../stores/useGameStore";

export const UsernameInput = () => {
  const { setUserName, username } = useGameStore();

  return (
    <div>
          <p>{username} </p>
          <label> New Username:
        <input
            value={username}
            onChange={(event) => setUserName(event.target.value)}
              />
              </label>
    </div>
  );
};
