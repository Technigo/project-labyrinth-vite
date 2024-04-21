import { useLabyrint } from "../stores/useLabyrint.jsx";
import { images } from "./images";
import { useState, useEffect } from "react";
import { Lottie } from "./lottie";
import "./User.css";

export const User = () => {
	const { loading, username, setUsername, fetchLabyrint, labyrint, fetchDirectionLabyrint, setDirection, setType, setRoom, setParams, setLabyrint } = useLabyrint();
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [showLoading, setShowLoading] = useState(true);
	const [currentImageDirection, setCurrentImageDirection] = useState('');
	let currentImage = images[labyrint.coordinates];
	if (labyrint.actions && labyrint.actions.length > 0) {
		let currentImageDirection = images[labyrint.coordinates + labyrint.actions[0].direction]
	}

	const handleInputChange = (event) => {
		setUsername(event.target.value);
		currentImage = images[labyrint.coordinates];
		if (labyrint.actions && labyrint.actions.length > 0) {
			let currentImageDirection = images[labyrint.coordinates + labyrint.actions.direction]
		}
	};

	const handleButtonClick = async () => {
		const random = Math.floor(Math.random() * 10000000);
		const username2 = username+random;
		setUsername(username2);
		setParams(`/start`);
		event.preventDefault();
		setIsSubmitted(true);
		await fetchLabyrint(username2);
		console.log(username2);
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
				let currentImageDirection = images[newLabyrint.coordinates + newLabyrint.actions.direction];
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
						<label name="username" htmlFor="username">I am Legend, I am..	</label>
						<input
							value={username}
							type="text"
							onChange={handleInputChange}
							name="username"
							id="username"
							autoComplete="given-name"
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
						<>
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
						</>
					)
					}</div>
			)
	)
}



