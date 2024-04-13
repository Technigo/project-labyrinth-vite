import { useStore } from "../stores/useStore";
import { Action } from "./Action";
import { Move } from "./Move";

export const Message = () => {
  const { data } = useStore();
  return (
    <section>
      <p className="desc">{data.description}</p>
      <p className="prompt">Where do you want to go next?</p>
      {data.actions.length > 0 ? (
        data.actions.map(opt => {
          return (
            <div key={opt.direction}>
              <Action
                key={`a-${opt.direction}`}
                action={opt}
              />
              <Move
                key={`m-${opt.direction}`}
                direction={opt.direction}
              />
            </div>
          );
        })
      ) : (
        <Move direction="home" />
      )}
    </section>
  );
};
