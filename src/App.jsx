import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Maze } from "./components/Maze";
import { Sound } from "./components/Sound";

export const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maze" element={<Maze />} />
        </Routes>
        <Sound />
      </div>
    </Router>
  );
};
