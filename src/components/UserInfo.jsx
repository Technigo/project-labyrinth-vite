import { useEffect, useRef } from "react";

import { useUserStore } from "../stores/useUserStore";

export const UserInfo = () => {
  const { userName, setUserName } = useUserStore();
  const focusRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  return (
    <div>
      <p>UserName: {userName} </p>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your username:
          <input
            type="text"
            ref={focusRef}
            value={userName}
            placeholder="New username"
            onChange={handleUserNameChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
