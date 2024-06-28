import { useUserStore } from "./stores/useUserStore";
import { Labyrinth } from "./components/Labyrinth";
import { User } from "./components/User";

export const App = () => {
  const { loggedIn } = useUserStore();

  return <>{loggedIn ? <Labyrinth /> : <User />}</>;
};

// return (
//   <Router>
//     <Switch>
//       <Route path="/user" component={User} />
//       <Route path="/labyrinth" component={Labyrinth} />
//       <Redirect to="/user" /> {/* Redirect to User component by default */}
//     </Switch>
//   </Router>
// );
// }