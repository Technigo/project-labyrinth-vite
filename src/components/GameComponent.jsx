import { useState } from "react";

import useGameStore from "../store/gameStore";
import StartComponent from "./StartComponent";

import "./GameComponent.css"
import { Directions } from "./Directions";

const GameComponent = () => {
	const { data, fetchData } = useGameStore();
	const [isStarted, setIsStarted] = useState(false);

	const startGame = (username) => {
		useGameStore.setState({ username })
		fetchData()
		setIsStarted(true)
	}

	const handleAction = async (action) => {
		try {
			const response = await fetch("https://labyrinth.technigo.io/action", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: useGameStore.getState().username,
					type: action.type,
					direction: action.direction,
				}),
			});
			const newData = await response.json();
			//Update the game data with the response
			useGameStore.setState({ data: newData });
		} catch (error) {
			console.error("Error occured while fetching data:", error)
		}
	};

	const moveEast = () => {
		const eastAction = data.actions.find(action => action.direction === "East")
		if (eastAction) {
			handleAction(eastAction)
		} else {
			console.error("No action available to move East.")
		}
	}

	console.log("Current data:", data);

	return (
		<div className="game-container">
			{!isStarted ? (
				<StartComponent onStart={startGame} />
			) : (
				<div>
					{data ? (
						<div>
							<Directions coordinates={data.coordinates} />
							<p>{data.description}</p>
							<ul>
								{data.actions.map((action, index) => (
									<li key={index}>
										<p>
											<strong>Direction:</strong> {action.direction}
										</p>
										<p>{action.description}</p>
										<button onClick={moveEast}>Move East</button>
									</li>
								))}
							</ul>
						</div>
					) : (
						<div>Loading...</div>
					)}
				</div>
			)}
		</div>
	)
};

export default GameComponent;