import SectionCard from "../../../UI/SectionCard";
import SummaryList from "./SummaryList";
import List from "./List";

export default function Section() {
  return (
    <section>
      <div className="  bg-[#eff0fe] py-4">
        <SectionCard css="md:flex-row flex-col gap-8 items-center py-20">
          <img
            src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929a28f062e77_over-ten.svg"
            loading="lazy"
            alt="Crypto coins"
            className="md:w-2/5 w-[80%]"
          />
          <SummaryList header="Over 10 Crypto Coins Available Now" headerCss="text-[#090b0e]" >
            <List
              element={
                <ul className="list-disc grid gap-3  text-sm">
                  <li>
                    Buy and sell 10+ crypto coins including Bitcoin, Ethereum,
                    USDC, Avax, Matic, Solana, and Doge
                  </li>
                  <li>Available for purchase 24/7 with real-time pricing</li>
                  <li>Invest in Stable-coins including USDC</li>
                  <li>Instant trade execution</li>
                </ul>
              }
            />
          </SummaryList>
        </SectionCard>
        <SectionCard css="md:flex-row-reverse flex-col gap-8 items-center py-20">
          <img
            src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929b94d062e71_send-receive-globally.svg"
            loading="lazy"
            alt="Send and receive globally"
            className="md:w-2/5 w-[80%]"
          />
          <SummaryList header="Send and Receive Globally" headerCss="text-[#090b0e]" >
            <List
              element={
                <ul className="list-disc grid gap-3 text-sm" >
                  <li>
                    On Chain Currencies: BTC, ETH, USDC, Doge Send/receive from
                    any
                  </li>
                  <li>
                    third party wallet address in Uganda and South Africa
                    Instantly cash
                  </li>
                  <li>out crypto to local currencies with no fees</li>
                </ul>
              }
            />
          </SummaryList>
        </SectionCard>
      </div>
      <div className="bg-[#2f3370]">
        <SectionCard css="md:flex-row flex-col gap-8 items-center py-20">
          <img
            src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad92935c3062e72_cash-to-crypto.svg"
            loading="lazy"
            alt="Convert cash to crypto"
            className="md:w-2/5 w-[80%]"
          />
          <SummaryList header="Convert Cash to Crypto and Crypto to Cash 24/7" headerCss="text-[#fff]" >
            <List
              element={
                <ul className="list-disc grid gap-3  text-sm text-[#c1c4e5]">
                  <li>
                    Connect your MoMo or Bank Accounts to fund and cash out
                  </li>
                  <li>Buy crypto using your Chipper balance</li>
                  <li>Receive crypto payments and convert at the best rates</li>
                </ul>
              }
            />
          </SummaryList>
        </SectionCard>
      </div>
    </section>
  );
}
