import HeaderCard from "../../../UI/HeaderCard";
import SectionCard from "../../../UI/SectionCard";
import AppIcon from "../../../UI/AppIcon";
export default function Header() {
  return (
    <HeaderCard>
      <SectionCard css="px-5 pb-10 xl:px-24 md:px-10 flex-col gap-8 md:flex-row-reverse" >
        <img
          src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63cfd7747e276813d00efb74_send-receive-cash.png"
          loading="lazy"
          sizes="(max-width: 767px) 90vw, (max-width: 991px) 46vw, 47vw"
          srcSet="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63cfd7747e276813d00efb74_send-receive-cash-p-500.png 500w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63cfd7747e276813d00efb74_send-receive-cash-p-800.png 800w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63cfd7747e276813d00efb74_send-receive-cash.png 834w"
          alt="Send and Receive Cash"
        />
        <div className="grid gap-5">
          <h1 className="text-white capitalize font-semibold text-[10vw] md:text-5xl sm:text-3xl leading-none">send & receive cash </h1>
          <p className="text-[#c1c4e5] text-[4vw] md:text-lg sm:text-xl leading-none">Move your money across town, across Africa, or across an ocean the fast, easy and borderless way.</p>
           <AppIcon color="text-[#acfce3]" />            
        </div>
      </SectionCard>
    </HeaderCard>
  );
}
