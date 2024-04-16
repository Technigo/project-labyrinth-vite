import { useGameStore } from "../stores/useGameStore";
export const TextBox = () => {
  const { labData } = useGameStore();

  console.log("TextBox labData: ", labData);

  return (
    <>
      <div>
        <h2>Main description</h2>
        <p>{labData.description}</p>
      </div>
      <div>
        <h3>Direction descriptions</h3>
        {labData.actions
          ? labData.actions.map((direction, index) => (
              <div className="direction-cards" key={index}>{direction.description} </div>
            ))
          : "No Data"}
      </div>
    </>
  );
};
