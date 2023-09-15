import SectionCard from "../../../../UI/SectionCard";
import SideTextCard from "../../../../UI/SideTextCard";
import AppIcon from "../../../../UI/AppIcon";
import headerImage from "./headerImg.svg";

function HeaderTopSection() {
  return (
    <SectionCard>
      <SideTextCard
        mainText={`move your money freely`}
        mainTextCss="text-[#d4d6eb] capitalize text-[10vw] md:text-4xl sm:text-3xl leading-none	"
        subText=" Your free Chipper account unlocks international transfers, payment
        cards and investing for Africans."
        subTextCss="text-[#c1c4e5] text-[4vw] md:text-lg sm:text-xl leading-none sm:w-4/5 md:w-full"
        css="gap-8"
      >
        <aside className="xl:flex justify-between items-center gap-5 hidden">
          <img src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9295195062e19_QR-code.svg" loading="lazy" alt="Chipper QR Code" className="rounded-full"/>
          <div>
            <h2>Scan to download</h2>
            <AppIcon color="text-[#c1c4e5]" />
          </div>
        </aside>
        <button className="md:hidden transition-all ease-linear duration-150 delay-0 hover:bg-[#393589] capitalize border-solid border-gray-500 border-[1px] px-4 py-2 rounded-[10px]">
          download the app
        </button>
      </SideTextCard>
      <div
        className="hidden bg-no-repeat img xl:block md:h-[550px] md:w-3/4 bg-cover"
        style={{ backgroundImage: `url(${headerImage})` }}
      ></div>
    </SectionCard>
  );
}
export default HeaderTopSection;
