import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartGame from "./StartGame";
import Rooms from "./Rooms";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartGameWithBackground />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
    </Router>
  );
};

const StartGameWithBackground = () => {
  return (
    <div className="withBackgroundImage">
      <StartGame />
    </div>
  );
};

export default AppRoutes;
