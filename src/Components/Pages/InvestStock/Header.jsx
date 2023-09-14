import SectionCard from "../../../UI/SectionCard";
import HeaderCard from "../../../UI/HeaderCard";
import AppIcon from "../../../UI/AppIcon";
export default function Header() {
  return (
    <HeaderCard>
      <SectionCard css="px-5 pb-10 xl:px-24 md:px-10 flex-col gap-8 md:flex-row-reverse">
        <img
          src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63cfd46af3b87b9e7f6bb88b_chipper-investments.png"
          loading="lazy"
          sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 47vw"
          srcSet="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63cfd46af3b87b9e7f6bb88b_chipper-investments-p-500.png 500w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63cfd46af3b87b9e7f6bb88b_chipper-investments.png 780w"
          alt="Chipper Investments"
          className="md:w-1/2"
        />
        <div className="grid gap-5 md:w-1/2">
          <h1 className="text-white capitalize font-semibold text-[10vw] md:text-5xl sm:text-3xl leading-none">
          Invest Without Breaking the Bank
          </h1>
          <p className="text-[#c1c4e5] text-[4vw] md:text-lg sm:text-xl leading-none">
          Build your stock portfolio by investing in fractional shares of your favorite publicly traded companies.
          </p>
          <AppIcon color="text-[#acfce3]" />    
        </div>
      </SectionCard>
    </HeaderCard>
  );
}
