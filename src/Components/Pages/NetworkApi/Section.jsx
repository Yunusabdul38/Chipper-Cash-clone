import SectionCard from "../../../UI/SectionCard";
import SummaryList from "../../../UI/SummaryList";
import List from "../../../UI/List";
import SideTextCard from "../../../UI/SideTextCard";

export default function Section() {
  return (
    <section className="bg-[#202654]">
      <div className="xl:px-24 md:px-10 py-10 md:w-1/2">
        <h1 className="text-white font-semibold text-4xl" >
          What can you do with the Chipper Network API?
        </h1>
        <p className="text-xl text-[#c1c4e5]">
          What amazing product can you build with your squad?
        </p>
      </div>
   
        <SectionCard css="md:flex-row flex-col gap-8 items-center py-20">
          <img
            src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929aa59062dfc_api-docs.webp"
            loading="lazy"
            sizes="(max-width: 479px) 93vw, (max-width: 767px) 90vw, (max-width: 991px) 43vw, 47vw"
            srcSet="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929aa59062dfc_api-docs-p-500.png 500w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929aa59062dfc_api-docs.webp 1032w"
            alt=""
            className="md:w-2/5 w-[80%]"
          />
          <SummaryList
            header="Accept Cross-Border Payments"
            headerCss="text-[#FFF]"
            text="start investing today"
          >
            <List
              element={
                <ul className="list-disc grid gap-3  text-sm text-[#c1c4e5]">
                  <li>
                    Receive payments from your customers in multiple currencies.
                  </li>
                  <li>
                    Enjoy the absolute lowest transaction fees, earn more profit
                    from every sale.
                  </li>
                  <li>Invest in Stable-coins including USDC</li>
                  <li>
                    Collect one-time or recurring payments from millions of
                    verified customers.
                  </li>
                </ul>
              }
            />
          </SummaryList>
        </SectionCard>
        <SectionCard css="md:flex-row-reverse flex-col gap-8 items-center py-20">
          <img
            src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9292a87062e03_payout-funds.webp"
            loading="lazy"
            sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 47vw"
            srcSet="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9292a87062e03_payout-funds-p-500.png 500w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9292a87062e03_payout-funds.webp 1042w"
            alt=""
            className="md:w-2/5 w-[80%]"
          />
          <SummaryList
            header="Payout Funds"
            headerCss="text-[#fff]"
            text="start investing today"
          >
            <List
              element={
                <ul className="list-disc grid gap-3 text-sm text-[#c1c4e5]">
                  <li>
                    Use the Chipper Network API to create custom payouts to
                    customers or suppliers.
                  </li>
                  <li>
                    Issue instant refunds to your customers directly into their
                    wallets.
                  </li>
                  <li>
                    Access your multi-currency business wallet directly from the
                    Chipper Cash app.
                  </li>
                </ul>
              }
            />
          </SummaryList>
        </SectionCard>
        <SectionCard css="md:flex-row flex-col gap-8 items-center py-20">
          <SideTextCard
            mainText="Unlock the Power of Cross-Border Payments"
            subText="Get settled in a global currency."
            subTextCss="text-[#c1c4e5]"
            mainTextCss="text-[#fff]"
          />
          <img
            src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9294a72062dfd_get-settled-in-usd.svg"
            loading="lazy"
            alt=""
            className="md:w-2/5 w-[80%]"
          />
        </SectionCard>
        <SectionCard css="md:flex-row flex-col gap-8 items-center py-20">
          <img
            src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9299864062e04_transactions.svg"
            loading="lazy"
            alt=""
            className="md:w-2/5 w-[80%]"
          />
          <SummaryList
            header="Easy and Accessible Dashboard"
            headerCss="text-[#fff]"
            text="start investing today"
          >
            <List
              element={
                <ul className="list-disc grid gap-3  text-sm text-[#c1c4e5]">
                  <li>Easy and quick access to all your transaction data.</li>
                  <li>
                    Get instant insights on your sales, monitor transactions,
                    download reports, and all-round account management to power
                    your business.
                  </li>
                  <li>Generate API keys on the go.</li>
                </ul>
              }
            />
          </SummaryList>
        </SectionCard>
        <SectionCard css="md:flex-row-reverse flex-col gap-8 items-center py-20">
          <img
            src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9296299062e05_secure-payments.svg"
            loading="lazy"
            alt=""
            className="md:w-2/5 w-[80%]"
          />
          <SummaryList
            header="Secure Payments"
            headerCss="text-[#fff]"
            text="start investing today"
          >
            <List
              element={
                <ul className="list-disc grid gap-3 text-sm text-[#c1c4e5]">
                  <li>
                  Direct access to millions of verified and KYC’d customers across Africa and beyond.
                  </li>
                  <li>
                  Our encrypted business wallet keeps your money safe with a guarantee.
                  </li>
                </ul>
              }
            />
          </SummaryList>
        </SectionCard>     
    </section>
  );
}
