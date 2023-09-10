import SectionCard from "../../../UI/SectionCard";
import SideTextCard from "../../../UI/SideTextCard";
export default function Section() {
  return (
    <section>
      <div className="bg-[#eff0fe]">
        <SectionCard css="md:flex-row flex-col gap-8 items-center py-20">
          <img
            src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929e87b062df1_cash-back.webp"
            loading="lazy"
            sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 47vw"
            srcSet="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929e87b062df1_cash-back-p-500.png 500w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929e87b062df1_cash-back-p-800.png 800w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929e87b062df1_cash-back-p-1080.png 1080w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929e87b062df1_cash-back.webp 1152w"
            alt=""
            className="md:w-2/5"
          />
          <aside>
            <h1 className="font-semibold text-4xl text-[#090b0e]">Over 10 Crypto Coins Available Now</h1>
            <ul>
              <li>
                Buy and sell 10+ crypto coins including Bitcoin, Ethereum, USDC,
                Avax, Matic, Solana, and Doge
              </li>
              <li>Available for purchase 24/7 with real-time pricing</li>
              <li>Invest in Stable-coins including USDC</li>
            </ul>
            <button className="bg-[#6945d8] capitalize text-white py-3 px-5 rounded-[1rem] font-medium hover:grayscale transition">
              get your chipper card
            </button>
          </aside>
        </SectionCard>
        <SectionCard css="md:flex-row-reverse flex-col gap-8 items-center py-20">
          <img
            src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929a011062df2_shop-globally.webp"
            loading="lazy"
            sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 47vw"
            srcSet="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929a011062df2_shop-globally-p-500.png 500w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929a011062df2_shop-globally.webp 990w"
            alt=""
            className="md:w-2/5"
          />
        </SectionCard>
      </div>
    </section>
  );
}
