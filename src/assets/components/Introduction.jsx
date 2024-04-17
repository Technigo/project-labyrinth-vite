export const Introduction = ({ onStartGame }) => {
  return (
    <div>
      <h2>The Lost City of Azura</h2>
      <p>
        In the heart of a dense jungle lies the Lost City of Azura, rumored to
        hold unimaginable treasures and ancient secrets. Many adventurers have
        attempted to uncover its mysteries, but none have returned. You, a
        daring explorer, have decided to embark on this perilous journey. Will
        you unravel the secrets of Azura, or will you become another lost soul
        swallowed by the jungle?
      </p>
      <h3>Introduction:</h3>
      <p>
        As you push through the thick foliage, you stumble upon an ancient stone
        doorway half-buried in the overgrowth. A sense of excitement pulses
        through your veins as you realize you've discovered the entrance to the
        Lost City of Azura. You stand at the threshold, faced with a choice:
      </p>
      <ul>
        <li>
          <button onClick={onStartGame}>
            Enter the doorway and delve into the unknown.
          </button>
        </li>
        <li>
          <button onClick={() => console.log("Player chose to turn back.")}>
            Turn back and reconsider your options.
          </button>
        </li>
      </ul>
    </div>
  );
};
