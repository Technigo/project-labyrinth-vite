import { useState } from "react";

import "./StartComponent.css"

const StartComponent = ({ onStart }) => {
	const [username, setUsername] = useState("");

	const handleStart = () => {
		if (username.trim() !== "") {
			onStart(username);
		}
	};

	return (
		<div className="start-container">
			<h2 className="start-title">Welcome to the Labyrinth! Please sacrifice your name at the altar of confusion and chaos. Or, you know, just type it in and let the fun begin</h2>
			<input
				type="text"
				className="start-input"
				placeholder="Enter your name"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				aria-label="Enter your name"
			/>
			<button className="start-button" onClick={handleStart}>Start</button>
		</div>
	);
};

export default StartComponent;