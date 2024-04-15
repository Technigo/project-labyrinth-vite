import { useStore } from "../stores/useStore";

export const UsernameInput = () => {
  const { setUserName, username } = useStore();

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
