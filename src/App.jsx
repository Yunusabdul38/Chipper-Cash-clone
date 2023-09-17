import { Fragment } from "react";
import { animateScroll as scroll } from "react-scroll";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/Navigation/NavBar";
import { FaAngleDoubleUp } from "react-icons/fa";
function App() {
  return (
    <Fragment>
      <NavBar />
      <div
        onClick={() => {
          scroll.scrollToTop();
        }}
      >
        <FaAngleDoubleUp
          className="bg-gray-500 rounded-full p-2 animate-scalling fixed bottom-4 right-3 md:right-6 z-50 text-[#202654]"
          size="30px"
        />
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
}
export default App;
