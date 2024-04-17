import { useEffect } from "react";

import useGameStore from "../store/gameStore";

const GameComponent = () => {
	const { data, fetchData } = useGameStore();

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			{data ? (
				<div>Render data here</div>
			) : (
				<div>Loading...</div>
			)}
		</div>
	)
};

export default GameComponent;

