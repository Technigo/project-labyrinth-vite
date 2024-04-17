import { useState } from "react";
import StartComponent from "./StartComponent";
import useGameStore from "../store/gameStore";
/* import "./GameComponent.css" */

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

	return (
		<div className="game-container">
			{!isStarted ? (
				<StartComponent onStart={startGame} />
			) : (
				<div>
					{data ? (
						<div>
							<h2>{data.coordinates}</h2>
							<p>{data.description}</p>
							<ul>
								{data.actions.map((action, index) => (
									<li key={index}>
										<h3>{action.type} </h3>
										<p>
											<strong>Direction:</strong> {action.direction}
										</p>
										<p>{action.description}</p>
										<button onClick={() => handleAction(action)} className="action-button">Choose Action</button>
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

