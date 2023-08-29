import Logo from "../assets/chipperCash.svg";

function NavBar() {
  return (
    <nav className="bg-[#393589] text-white flex sm:justify-start xl:justify-between items-center xl:px-24 xl:py-4 capitalize sm:flex-col xl:flex-row ">
      <img src={Logo} alt="chipper cash logo" className="w-28 text-[#393589] img"/>
      <ul className="flex justify-between items-center gap-3">
        
        <li>products</li>
        <li>company</li>
        <li>blogs</li>
        <li>supports</li>
        <button className="capitalize border-solid border-gray-500 border-[1px] px-4 py-2 rounded-[10px] ">download</button>
      </ul>
    </nav>
  );
}

export default NavBar;
