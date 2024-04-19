import { useGameStore } from "../stores/useGameStore";
export const TextBox = () => {
  const { labData } = useGameStore();

  return (
    <>
      <div className="textbox textbox-main">
        <h2>Main description</h2>
        <p>{labData.description}</p>
      </div>
      <div className="textbox textbox-direction">
        <h3>Direction descriptions</h3>
        {labData.actions
          ? labData.actions.map((direction, index) => (
              <div className="direction-cards" key={index}><p>{direction.description} </p></div>
            ))
          : "No Data"}
      </div>
    </>
  );
};
