import React from "react";
import { useLabyrint } from "../stores/useLabyrint.jsx";
import { images } from "./images";
import { useState, useEffect } from "react";
import { Lottie } from "./lottie";
import "./User.css";

export const User = () => {
	const { loading, username, setUsername, fetchLabyrint, labyrint, fetchDirectionLabyrint, setDirection, setType, setRoom, setParams, setLabyrint } = useLabyrint();
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [currentImageDirection, setCurrentImageDirection] = useState('');
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
			if (newLabyrint) {
				currentImage = images[newLabyrint.coordinates];
				currentImageDirection = images[newLabyrint.coordinates + newLabyrint.actions.direction];
				setLabyrint(newLabyrint);
			} else {
				console.error('Failed to fetch new labyrinth');
			}
		} catch (error) {
			console.error('Failed to fetch new labyrinth:', error);
		}
	};
	return (
		!username || !isSubmitted ? (
			<section className="hero">
				<div className="form">
					<form onSubmit={handleButtonClick}>
						<h1>To enter the maze, we need a hero&#39;s name</h1>
						<label>I am Legend, I am..</label>
						<input
							value={username}
							type="text"
							onChange={handleInputChange}
						/>
						<button onClick={handleButtonClick}>Enter the maze</button>
					</form>
				</div>
			</section>
		)
			: (
				<div className="game-stage" style={{ backgroundImage: `url(${currentImage})` }}>

					{loading ? <Lottie /> : null}

					{labyrint && labyrint.actions && (
						<div>
							{	/*	{JSON.stringify(labyrint)}
							<p>you are now at: {labyrint.coordinates}</p>*/}
							<h2 className="area">{labyrint.description}</h2>
							<section className="options-container">
								{labyrint.actions.map((action, index) => (

									<div key={index}>
										<div className="option">
										<div className="option-image" style={{
											backgroundImage: `url(${images[labyrint.coordinates + action.direction]})`
										}}> </div>

											<div className="option-text-btn-container">
												<p>{action.description}</p>
												<button className="button-direction" onClick={() => handleDirection(action.direction)}> Go {action.direction}</button>

											</div>
										</div>
									</div>

								))}
							</section>
						</div>
					)
					}</div>
			)
	)
}



