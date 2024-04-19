import { useLabyrint } from "../stores/useLabyrint.jsx";


export const User = () => {
  const {username,setUsername, fetchLabyrint, labyrint } = useLabyrint();


  const handleInputChange = (event) => {
    setUsername(event.target.value);
    console.log(event.target.value);
  };

  const handleButtonClick = async () => {
    await fetchLabyrint(username);
  };

  return (
    <div>
      <h1>Enter your username</h1>
      <label>Username:</label>
      <input
        type="text"
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Submit</button>
      {labyrint && <div>{JSON.stringify(labyrint)}</div>}
      <p>{labyrint.coordinates}</p>
      <p>{labyrint.description}</p>
      {labyrint.actions.map((action, index) => (
  <div key={index}>
    <p>{action.type}</p>
    <p>{action.direction}</p>
    <p>{action.description}</p>
  </div>
))}
      
    </div>
  );
}

export default User;