import { useRef, useEffect } from "react";
import { StartPage } from "./components/StartPage";
import { GamePage } from "./components/GamePage";
import useLabyrinthStore from "./stores/useLabyrinthStore";
import "./App.css";

export const App = () => {
  const bgImgRef = useRef(null);
  const { loggedIn, coordinates } = useLabyrinthStore();

  const changeBgImg = (coordinates) => {
    if (bgImgRef.current) {
      bgImgRef.current.style.backgroundImage = `url('${coordinates}.jpg')`;
    }
  };

  useEffect(() => {
    if (coordinates) {
      changeBgImg(coordinates);
    } else {
      changeBgImg("start");
    }
  }, [coordinates]);

  return (
    <div ref={bgImgRef} className="main-container">
      {loggedIn ? (
        <GamePage changeBgImg={changeBgImg} />
      ) : (
        <StartPage changeBgImg={changeBgImg} />
      )}
    </div>
  );
};

