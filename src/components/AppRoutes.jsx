import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartGame from "./StartGame";
import Rooms from "./Rooms";
import BackgroundWrapper from "./BackgroundWrapper";

const AppRoutes = () => {
  return (
    <Router>
      <BackgroundWrapper>
        <Routes>
          <Route path="/" element={<StartGame />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      </BackgroundWrapper>
    </Router>
  );
};

export default AppRoutes;
