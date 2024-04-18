import { useStartLabyrinthStore } from '../stores/useStartLabyrinthStore'

import '../styles/DisplayStartLabyrinth.css'

export const DisplayStartLabyrinth = () => {
	const {
		loading,
		start,
		direction, 
		fetchMove,
		userName,
		/* set, */
	} = useStartLabyrinthStore()

	const handleMoveButtonClick = (action, userName, direction) => {
		console.log('Button clicked:', action.direction)
		const direction = action.direction
		/* set({ direction }) */
		fetchMove(userName, direction)
		console.log(userName, direction)
	}

	if (loading) {
		return <div>Loading ...</div>
	}

	//Added this part to check if the data is already available for the map function otherwise the code would break.
	if (!start || !start.actions) {
		return <div>No data available.</div>
	}

	console.log(start)
	console.log(start.actions)
	return (
		<div className="labyrinth-start">
			<p>{start.description}</p>

			{start.actions.map((action) => (
				<button
					key={action.description}
					/* value={action.direction} */
					onClick={() => handleMoveButtonClick(action, userName)}>
					{action.direction}
				</button>
			))}
		</div>
	)
}
