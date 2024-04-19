import { useLabyrinthStore } from "../stores/useLabyrinthStore";
import { Header } from "./Header";
import "first-page-pic.jpg"
import "../styles/UserInput.css";

export const UserInput = () => {
  const { userName, setUserName, fetchStart } = useLabyrinthStore();

  const handleStartButtonClick = () => {
    if (userName === "") {
      alert("Please set a username. Thx!");
    } else {
      fetchStart(userName);
    }
  };

  return (
		<>
			<div className="background-picture">
				<img className="background-picture" src="first-page-pic.jpg" />
				<Header />
				<div className="input-page">
					<h1>
						Search for the gold plated chest or take a stroll through the forest{' '}
						<br />- let's see where the path takes us!
					</h1>
					<label className="start-title" htmlFor="user-input">
						{' '}
						Your username:
					</label>
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
					<button className="start-button" onClick={handleStartButtonClick}>
						Click to start Adventure
					</button>
				</div>
			</div>
		</>
	)
};
