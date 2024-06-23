import { Directions } from "../components/Directions"
import { Loading } from "../components/Loading"
import { Start } from "../components/Start"

// Import all css files
export const App = () => {
  return (
    <> 
  <div>
    Labyrinth Project 
  </div>

<Directions/>
<Loading/>
<Start/>
</>
  );
};
