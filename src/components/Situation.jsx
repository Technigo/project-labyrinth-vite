import { useStore } from "../stores/useStore";
import { Action } from "./Action";
import "../css/situation.css";
import { Button } from "./Button";
import { useEffect, useRef } from "react";

export const Situation = () => {
  const { data, loading } = useStore();
  const container = useRef();

  useEffect(() => {
    container.current.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [loading]);

  return (
    <section
      className="situation-container"
      ref={container}>
      {/* If status is loading, show message */}
      {loading ? (
        <p className="loading">Adventure loading..........</p>
      ) : (
        // otherwise, show situation
        <>
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
        </>
      )}
    </section>
  );
};
