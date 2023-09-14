import HeaderCard from "../../../UI/HeaderCard";
import SectionCard from "../../../UI/SectionCard";
import AppIcon from "../../../UI/AppIcon";
export default function Header() {
  return (
    <HeaderCard>
      <SectionCard css="px-5 pb-0 xl:px-24 md:px-10  flex-col-reverse gap-8 md:flex-row-reverse">
        <img
          src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63e2162339035a365af8726e_chipper%20crypto%20hand.png"
          loading="lazy"
          sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 39vw"
          srcSet="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63e2162339035a365af8726e_chipper%20crypto%20hand-p-500.png 500w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63e2162339035a365af8726e_chipper%20crypto%20hand-p-800.png 800w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63e2162339035a365af8726e_chipper%20crypto%20hand.png 983w"
          alt="Buy and sell cryptocurrencies"
          className="md:w-2/5"
        />
        <div className="grid gap-5 md:w-2/5">
          <h1 className="text-white capitalize font-semibold text-[10vw] md:text-5xl sm:text-3xl leading-none">
            Buy/Sell & Send/Receive Cryptos with Chipper
          </h1>
          <p className="text-[#c1c4e5] text-[4vw] md:text-lg sm:text-xl leading-none">
            Start investing in crypto for less than $1 in Uganda and South
            Africa, with Rwanda coming soon.
          </p>
          <AppIcon color="text-[#acfce3]" />    
        </div>
      </SectionCard>
    </HeaderCard>
  );
}
