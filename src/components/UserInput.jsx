import { useStartLabyrinthStore } from '../stores/useStartLabyrinthStore'
import { Header } from './Header'

import '../styles/UserInput.css'

export const UserInput = () => {
	const { userName, setUserName, fetchStart } = useStartLabyrinthStore()

	const handleStartButtonClick = () => {
		if (userName === '') {
			alert('Please set a username. Thx!')
		} else {
			fetchStart(userName)
		}
	}

	return (
		<>
			<div className='background-picture'>
				<Header />
				<div className="input-page">
					<label className="start-title" htmlFor="user-input"> Your username:</label>
					<input
						className="input-field"
						id="user-input"
						type="text"
						placeholder="chose something rare"
						value={userName}
						onChange={(event) => {
							setUserName(event.target.value)
						}}
					/>
					<button className="start-button" onClick={handleStartButtonClick}>Click to start Adventure</button>
				</div>
			</div>
		</>
	)
}
