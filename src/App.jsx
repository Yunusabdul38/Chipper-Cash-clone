import { Fragment } from "react";
import NavBar from "./Components/Navigation/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Pages/Home/Home"
import SendReciveMoney from "./Components/Pages/SendReceived/SendReciveMoney";
function App() {
  return (
    <Fragment>
      <NavBar />
      {/* <Home /> */}
      <SendReciveMoney />
      <Footer/>
    </Fragment>
  );
}
export default App;
