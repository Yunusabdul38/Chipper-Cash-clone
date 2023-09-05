import { useState } from "react";
import Logo from "./assets/chipperCash.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown,faXmark,faBars } from "@fortawesome/free-solid-svg-icons";

const downIcon = <FontAwesomeIcon icon={faChevronDown} />
const xIcon = <FontAwesomeIcon icon={faXmark} />
const barsIcon = <FontAwesomeIcon icon={faBars}/>

function NavBar() {
  const [showMenu,setShowMenu] =useState(false)

  return (
    <nav className={`${showMenu?"h-screen":"h-16"} bg-[#202654] text-white items-start flex justify-between flex-col md:items-center px-5 py-5 md:px-28 md:py-4 capitalize md:flex-row fixed w-full gap-7 md:gap-0 top-0 transition-all ease-out`}>
      <img src={Logo} alt="chipper cash logo" className="w-28 text-[#393589]"/>
      <ul className={`md:flex justify-start md:justify-between md:flex-row flex-col md:items-center gap-3 items-start md:h-auto w-full md:w-auto ${showMenu?"flex h-screen":"hidden"}`}>
        <li className="w-full md:w-auto">products<span className="float-right md:float-none md:ml-3">{downIcon}</span></li>
        <li className="w-full md:w-auto">company <span className="float-right md:float-none md:ml-3">{downIcon}</span></li>
        <li>blogs</li>
        <li>supports</li>
        <button className="transition-all ease-linear duration-150 delay-0 hover:bg-[#393589] capitalize border-solid border-gray-500 border-[1px] px-4 py-2 rounded-[10px]">download</button>
      </ul>
      <div className="md:hidden absolute top-4 right-5 text-3xl transition-all ease-out" onClick={()=>{
        setShowMenu(prev=>!prev)
      }}>{showMenu?xIcon:barsIcon}</div>
    </nav>
  );
}

export default NavBar;
