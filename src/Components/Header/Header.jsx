import HeaderTopSection from "./HeaderTopSection";
import HeaderEndSection from "./HeaderEndsection";
function Header() {
  return (
    <header className="bg-[#202654] px-5 py-5 md:px-24 md:py-4 text-[#fff] mt-16 pt-10 ">
        <HeaderTopSection />
        <HeaderEndSection />
    </header>
  );
}
export default Header;
