import { useLabyrint } from "../stores/useLabyrint.jsx";
import { images } from "./images";
import { useState, useEffect } from "react";

export const User = () => {
	const { loading, username, setUsername, fetchLabyrint, labyrint, fetchDirectionLabyrint, setDirection, setType, setRoom, setParams, setLabyrint } = useLabyrint();
	const[isSubmitted, setIsSubmitted] = useState(false);
	const [currentImageDirection, setCurrentImageDirection] = useState('');
	//let currentImage = images["0,0"];
	//let currentImageDirection = images["0,0East"];
	let currentImage = images[labyrint.coordinates];
	if (labyrint.actions && labyrint.actions.length > 0) {
	let currentImageDirection = images[labyrint.coordinates + labyrint.actions[0].direction]
	}

	const handleInputChange = (event) => {
		setUsername(event.target.value);
		console.log(event.target.value);
		currentImage = images[labyrint.coordinates];
		if (labyrint.actions && labyrint.actions.length > 0) {
			let currentImageDirection = images[labyrint.coordinates + labyrint.actions.direction]
			console.log("handleinput currentimgdir", currentImageDirection)
			}
	};

	const handleButtonClick = async () => {
		setParams(`/start`);
		event.preventDefault();
		setIsSubmitted(true);
		await fetchLabyrint(username);
	};

	useEffect(() => {
		if (labyrint.actions && labyrint.actions.length > 0) {
			setCurrentImageDirection(images[labyrint.coordinates + labyrint.actions[0].direction]);
		}
	}, [labyrint]);

	const handleDirection = async (direction) => {
		try {
			setDirection(direction);
			setType(labyrint.actions[0].type);
			setRoom(labyrint.description);
			let params = `action`;
			setParams(params);
			console.log("beskrivelse:", labyrint.description);
			console.log("handling:", labyrint.actions[0].type);
			console.log("retning:", direction);
			console.log("params:", params);
			const newLabyrint = await fetchDirectionLabyrint(
				username,
				labyrint.actions[0].type,
				direction,
				labyrint.coordinates,
				labyrint.description,
				params
			);
			if(newLabyrint){
			currentImage = images[newLabyrint.coordinates];
			currentImageDirection = images[newLabyrint.coordinates + newLabyrint.actions.direction];
			setLabyrint(newLabyrint);
		}else{
			console.error('Failed to fetch new labyrinth');
		}
		} catch (error) {
			console.error('Failed to fetch new labyrinth:', error);
		}
	};
	return (
		!username || !isSubmitted ?(

			<div className="form">
				<form onSubmit={handleButtonClick}>
					<h1>Enter your username</h1>
					<label>Username:</label>
					<input
						value={username}
						type="text"
						onChange={handleInputChange}
					/>
					<button onClick={handleButtonClick}>Submit</button>
				</form>
			</div>
		)
			: (
				<div className="game-stage" style={{ backgroundImage: `url(${currentImage})` }}>
					{loading ? <p>Loading...</p> : null}
					{labyrint && labyrint.actions && (
						<div>
							{JSON.stringify(labyrint)}
							<p>you are now at: {labyrint.coordinates}</p>
							<p>{labyrint.description}</p>
							{labyrint.actions.map((action, index) => (
								<div className="options-container" key={index}>
									<div className="option" style={{ backgroundImage: `url(${images[labyrint.coordinates + action.direction]})`}}>
										<p>{action.description}</p>
										<button className="button-direction" style={{ backgroundImage: `url(${images[labyrint.coordinates + action.direction]})`}} onClick={() => handleDirection(action.direction)}> Go {action.direction}</button>
									</div>
								</div>
							))}
						</div>
					)
					}</div>
			)
	)
}



