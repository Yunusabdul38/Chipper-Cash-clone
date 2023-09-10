import { Fragment } from "react";
import NavBar from "./Components/Navigation/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Pages/Home"
function App() {
  return (
    <Fragment>
      <NavBar />
      <Home />
      <Footer/>
    </Fragment>
  );
}
export default App;
