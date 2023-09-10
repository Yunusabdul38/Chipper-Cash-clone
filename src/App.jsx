import { Fragment } from "react";
import NavBar from "./Components/Navigation/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Pages/Home/Home"
import ChipperCard from "./Components/Pages/ChipperCard/ChipperCard"
import SendReciveMoney from "./Components/Pages/SendReceived/SendReciveMoney";
import InvestCrypto from "./Components/Pages/InvestCrypto/InvestCrypto";
function App() {
  return (
    <Fragment>
      <NavBar />
      {/* <Home /> */}
      {/* <SendReciveMoney /> */}
      {/* <ChipperCard/> */}
      <InvestCrypto />
      <Footer/>
    </Fragment>
  );
}
export default App;
