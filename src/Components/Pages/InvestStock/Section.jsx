import SectionCard from "../../../UI/SectionCard";
import SummaryList from "../../../UI/SummaryList";
import List from "../../../UI/List";

export default function Section() {
  return (
    <section className="  bg-[#eff0fe] py-4">
      <SectionCard
        css="md:flex-row flex-col gap-8 items-center py-20"
      >
      
        <img
          src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929489b062df8_stocks.webp"
          loading="lazy"
          sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 47vw"
          srcSet="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929489b062df8_stocks-p-500.png 500w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929489b062df8_stocks-p-800.png 800w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929489b062df8_stocks.webp 992w"
          alt="Invest in Stocks"
          className="md:w-2/5 w-[80%]"
        />
        <SummaryList
          header="Over 10 Crypto Coins Available Now"
          headerCss="text-[#090b0e]"
          text="start investing today"
        >
          <List
            element={
              <ul className="list-disc grid gap-3  text-sm text-[#090b0e]">
                <li>
                Buy fractional stock shares with as little as $1 in Naira💶 and UGX💶 . 
                </li>
                <li>Own shares of Facebook, Amazon, Apple, Google, Nike, Netflix & 1000’s more publicly traded companies.</li>
                <li>ILowest commissions. Fastest trade execution.</li>
              </ul>
            }
          />
        </SummaryList>
      </SectionCard>
    </section>
  );
}
