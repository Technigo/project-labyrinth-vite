import { useStore } from "../stores/useStore";
import "../css/story.css";

export const Story = () => {
  const { gameHistory } = useStore();

  return (
    <section className="game-history">
      {gameHistory.length > 0 &&
        gameHistory.map(step => {
          return (
            step.move && (
              <div
                key={step._id}
                id={step._id}>
                <p>{step.scene}</p>
                <p>{`${step.action} --> ${step.move}`}</p>
              </div>
            )
          );
        })}
    </section>
  );
};
