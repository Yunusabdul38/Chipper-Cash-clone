import TopSection from "./TopSection";
import Section from "./Section"
import HoverText from "../../../../UI/HoverText"
import SectionCard from "../../../../UI/SectionCard";
import SideTextCard from "../../../../UI/SideTextCard";
function Showcase() {
  return (
    <>
      <SectionCard css="md:flex-row-reverse pb-10 flex-col-reverse bg-white gap-5">
        <SideTextCard
          mainText="Send Money Directly to Bank and Mobile Money Accounts in 21+ African
            Countries"
          mainTextCss="text-[5vw] md:text-3xl sm:text-2xl leading-none"  
          subText="Sending money back home just got a whole lot easier with Chipper."
          subTextCss="text-[rgba(44,22,68,.9)]"
        >
        <HoverText>Choose Chipper Cash</HoverText>
        </SideTextCard>
        <img
          src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/646f0c4b802baac4f23097b5_key_visual-p-800.webp"
          alt="phone"
          className="md:w-1/2"
        />
      </SectionCard>
      <section className="px-5 xl:px-24 md:px-10 bg-[#6642d1] flex justify-between items-center overflow-hidden relative">
        <div className=" w-2/3 absolute md:relative z-0">
          <h1 className="text-[6vw] md:text-5xl sm:text-2xl leading-none md:font-semibold text-[#acfde4] font-medium">
            Shop, Stream, and Subscribe Online.
          </h1>
          <p className="font-light text-white md:text-3xl text-xl ">
            Pay globally with the Chipper Card
          </p>
        </div>
        <img
          className="md:ml-0 ml-48 w-full border-solid h-full md:w-1/2"
          src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/646f10177899cb677d8e7510_Group%203705.webp"
          loading="lazy"
          sizes="(max-width: 479px) 97vw, (max-width: 767px) 96vw, (max-width: 991px) 81vw, 62vw"
          width="784"
          alt="person with phone"
          srcSet="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/646f10177899cb677d8e7510_Group%203705-p-500.webp 500w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/646f10177899cb677d8e7510_Group%203705-p-800.webp 800w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/646f10177899cb677d8e7510_Group%203705-p-1080.webp 1080w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/646f10177899cb677d8e7510_Group%203705.webp 1568w"
        />
      </section>
      <TopSection />
      <Section />
    </>
  );
}
export default Showcase;
