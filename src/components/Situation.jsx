import { useStore } from "../stores/useStore";
import { Action } from "./Action";
import "../css/situation.css";
import { Button } from "./Button";

export const Situation = () => {
  const { data } = useStore();
  return (
    <section className="situation-container">
      <p className="situation-desc">{data.description}</p>
      <p className="prompt">Where do you want to go next?</p>
      <div className="actions-container">
        {data.actions.length > 0 ? (
          data.actions.map(opt => {
            return (
              <Action
                key={`a-${opt.direction}`}
                action={opt}
              />
            );
          })
        ) : (
          <Button direction="home" />
        )}
      </div>
    </section>
  );
};
