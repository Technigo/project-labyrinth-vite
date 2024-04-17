import { useState } from "react";
import { useStore } from "../stores/useStore";
import "../css/input.css";

export const Input = () => {
  const { setUserName, setUserId } = useStore();
  const [newName, setNewName] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    setUserId();
    setUserName(newName);
    setNewName("");
  };

  const handleChange = event => setNewName(event.target.value);

  return (
    <div className="form-container">
      <p>Enter a username to play</p>
      <form
        name="name-form"
        onSubmit={handleSubmit}>
        <input
          name="name-input"
          type="text"
          value={newName}
          onChange={handleChange}
          placeholder="Type username"
        />
        <button className="btn">Start game</button>
      </form>
    </div>
  );
};
