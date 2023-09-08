import { Fragment } from "react";
import NavBar from "./Components/Navigation/NavBar";
import Header from "./Components/Header/Header";
import Showcase from "./Components/ShowCase/ShowCase";
import Section from "./Components/ShowCase/Section";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <Fragment>
      <NavBar />
      <Header />
      <Showcase />
      <Section />
      <Footer/>
    </Fragment>
  );
}
export default App;
