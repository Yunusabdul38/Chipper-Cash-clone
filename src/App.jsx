import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/Navigation/NavBar";
function App() {
  return (
    <Fragment>
      <NavBar />
      <Outlet></Outlet>
    </Fragment>
  );
}
export default App;
