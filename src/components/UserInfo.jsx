import { useEffect, useRef } from "react";
import { useUserStore } from "../stores/useUserStore";

export const UserInfo = () => {
  const { userName, setUserName } = useUserStore();
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update the global state with the input's current value
    const newUserName = inputRef.current.value;
    setUserName(newUserName);
  };

  // const handleUserNameChange = (event) => {
  //   setUserName(event.target.value);
  // };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <p>UserName: {userName} </p>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your username:
          <input
            type="text"
            ref={inputRef}
            defaultValue={userName} // Set initial value to userName, not controlling ongoing input changes
            placeholder="New username"
            // onChange={handleUserNameChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
