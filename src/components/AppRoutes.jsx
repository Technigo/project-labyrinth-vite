import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartGame from "./StartGame";
import Rooms from "./Rooms";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartGame />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
