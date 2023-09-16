import { Fragment } from "react";
import { Link } from "react-scroll";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/Navigation/NavBar";
import { FaAngleDoubleUp } from "react-icons/fa";
function App() {
  return (
    <Fragment>
      <NavBar />
      <Link to="header" smooth={true} offset={-20} duration={700}>
        <FaAngleDoubleUp
        className="bg-gray-500 rounded-full p-2 animate-scalling fixed bottom-4 right-3 md:right-6 z-50 text-[#202654]"
          size="30px"
        />
      </Link>
      <Outlet></Outlet>
    </Fragment>
  );
}
export default App;
