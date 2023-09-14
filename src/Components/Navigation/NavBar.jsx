import { useState } from "react";
import { Link } from "react-router-dom";
import ProductNavBar from "./ProductNavBar";
import CompanyNavBar from "./CompanyNavBar";
import Logo from "./assets/chipperCash.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown,faXmark,faBars } from "@fortawesome/free-solid-svg-icons";

const downIcon = <FontAwesomeIcon icon={faChevronDown} />
const xIcon = <FontAwesomeIcon icon={faXmark} />
const barsIcon = <FontAwesomeIcon icon={faBars}/>

function NavBar() {
  const [showMenu,setShowMenu] =useState(false)
  const [showProduct, setShowProduct] = useState(false)
  const [showCompany, setShowCompany] = useState(false)
  function showProducthandle(){
    setShowProduct(prev=>!prev)
    setShowCompany(false)
  }
  function showCompanyHandle(){
    setShowCompany(prev=>!prev)
    setShowProduct(false)
  }
  return (
    <nav className={`${showMenu?"z-10 h-screen":"h-16"} bg-[#202654] text-white items-start flex justify-between flex-col xl:items-end px-5 py-5 md:px-10   xl:px-24 xl:py-4 capitalize xl:flex-row sticky w-full gap-7 xl:gap-0 top-0 transition-all ease-out`}>
      <Link to="/">
      <img src={Logo} alt="chipper cash logo" className="w-28 cursor-pointer"/>
      </Link>
      <ul className={`mt-12 xl:flex justify-start xl:justify-between xl:flex-row flex-col xl:items-center gap-3 items-start xl:h-auto w-full xl:w-auto ${showMenu?"flex h-screen":"hidden"}`}>
        <li className="cursor-pointer w-full xl:w-auto flex flex-col" onClick={showProducthandle} >
          <div>products<span className="float-right xl:float-none xl:ml-3">{downIcon}</span></div>
          {showProduct && <ProductNavBar/>}
        </li>
        <li className="cursor-pointer w-full xl:w-auto" onClick={showCompanyHandle}>
          <div>company <span className="float-right xl:float-none xl:ml-3">{downIcon}</span></div>
          {showCompany && <CompanyNavBar />}
        </li>
        <li> <Link to="/blog">blogs</Link></li>
        <li><Link to="/supports">supports</Link></li>
        <button className="transition-all ease-linear duration-150 delay-0 hover:bg-[#393589] capitalize border-solid border-gray-500 border-[1px] px-4 py-2 rounded-[10px]"><Link to="/download" >download</Link> </button>
      </ul>
      <div className="xl:hidden absolute top-4 right-5 md:right-10 text-3xl transition-all ease-out" onClick={()=>{
        setShowMenu(prev=>!prev)
      }}>{showMenu?xIcon:barsIcon}</div>
    </nav>
  );
}

export default NavBar;
