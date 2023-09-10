import SectionCard from "../../../UI/SectionCard";
import SideTextCard from "../../../UI/SideTextCard";
export default function Section() {
  return (
    <section>
      <SectionCard css="md:flex-row flex-col gap-8 items-center py-20 bg-[#eff0fe]">
        <img
          src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929e87b062df1_cash-back.webp"
          loading="lazy"
          sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 47vw"
          srcSet="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929e87b062df1_cash-back-p-500.png 500w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929e87b062df1_cash-back-p-800.png 800w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929e87b062df1_cash-back-p-1080.png 1080w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929e87b062df1_cash-back.webp 1152w"
          alt=""
          className="md:w-2/5"
        />
        <SideTextCard
          css="gap-3 md:w-2/5"
          mainText="Shop, Stream, and Subscribe Globally"
          subText="Shop online with the Chipper Card around the world."
        >
          <button className="bg-[#6945d8] capitalize text-white py-3 px-5 rounded-[1rem] font-medium hover:grayscale transition">
            get your chipper card
          </button>
        </SideTextCard>
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
        <SideTextCard
          css="gap-3 md:w-2/5"
          mainText="Accepted Everywhere"
          subText="Use your Chipper Card for online purchases anywhere Visa cards are accepted."
        ></SideTextCard>
      </SectionCard>
      <SectionCard css="md:flex-row flex-col gap-8 items-center py-16 bg-[#eff0fe]">
        <img
          src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929d457062df3_budget-effectively.webp"
          loading="lazy"
          sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 47vw"
          srcSet="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929d457062df3_budget-effectively-p-500.png 500w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929d457062df3_budget-effectively-p-800.png 800w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929d457062df3_budget-effectively.webp 1138w"
          alt=""
          className="md:w-2/5"
        />
        <SideTextCard
          css="gap-3 md:w-2/5"
          mainText="Budget Effectively"
          subText="Limit spending by only using the amount uploaded to your card"
        />
      </SectionCard>
      <SectionCard css="md:flex-row-reverse flex-col gap-8 items-center pt-14">
        <img
          src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9292e19062df4_digitally-native.webp"
          loading="lazy"
          sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 47vw"
          srcSet="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9292e19062df4_digitally-native-p-500.png 500w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9292e19062df4_digitally-native-p-800.png 800w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9292e19062df4_digitally-native.webp 1120w"
          alt=""
          className="md:w-2/5"
        />
        <SideTextCard
          css="gap-3 md:w-2/5"
          mainText="Digitally Native"
          subText="A digital card for your digital life"
        >
          <button className="bg-[#6945d8] capitalize text-white py-3 px-5 rounded-[1rem] font-medium hover:grayscale transition">
            get your chipper card
          </button>
        </SideTextCard>
      </SectionCard>
    </section>
  );
}
