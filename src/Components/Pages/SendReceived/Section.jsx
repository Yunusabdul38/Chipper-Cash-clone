import SectionCard from "../../../UI/SectionCard";
import SideTextCard from "../../../UI/SideTextCard";
import HoverText from "../../../UI/HoverText";
import Modal from "./Modal";
export default function Section() {
  return (
    <section>
      <SectionCard css="md:flex-row flex-col gap-8 items-center pt-20">
        <img
          src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929e9f5062dbc_lightning-fast.webp"
          loading="lazy"
          sizes="(max-width: 767px) 90vw, (max-width: 991px) 46vw, 47vw"
          srcSet="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929e9f5062dbc_lightning-fast-p-500.png 500w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929e9f5062dbc_lightning-fast-p-800.png 800w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929e9f5062dbc_lightning-fast.webp 1056w"
          alt="Lightning-fast, Secure Money Transfers"
          className="md:w-2/5 md:justify-self-center"
        />
        <SideTextCard
          css="gap-3 md:w-2/5"
          mainText="Lightning-fast, Secure Money Transfers"
          subText="Enjoy free transfers and the lowest cross-border rates. More money stays in your pocket, and more arrives in theirs."
        >
          <HoverText>Get started with Chipper Cash</HoverText>
        </SideTextCard>
      </SectionCard>
      <SectionCard css="md:flex-row-reverse bg-[#eff0fe] flex-col gap-8 items-center py-14">
        <img
          src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9296197062de4_sending-money.webp"
          loading="lazy"
          sizes="100vw"
          srcSet="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9296197062de4_sending-money-p-500.png 500w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9296197062de4_sending-money-p-800.png 800w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9296197062de4_sending-money-p-1080.png 1080w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9296197062de4_sending-money.webp 1183w"
          alt="Sending Money is as Easy as Sending a Text"
          className="md:w-2/5"
        />
        <SideTextCard
          css="gap-3 md:w-2/5"
          mainText="Sending Money is as Easy as Sending a Text"
          subText="Securely link any mobile money or bank account. Cash in and cash out at no cost."
        >
           <HoverText>Get started with Chipper Cash</HoverText>
        </SideTextCard>
      </SectionCard>
      <SectionCard css="md:flex-row flex-col gap-8 items-center py-16">
        <img
          src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad92902b2062dd8_instant-airtime.webp"
          loading="lazy"
          sizes="(max-width: 767px) 90vw, (max-width: 991px) 46vw, 47vw"
          srcSet="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad92902b2062dd8_instant-airtime-p-500.png 500w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad92902b2062dd8_instant-airtime.webp 803w"
          alt="Instant Airtime for Less"
          className="md:w-2/5"
        />
        <SideTextCard
          css="gap-3 md:w-2/5"
          mainText="Instant Airtime for Less"
          subText="Get 2% cashback on Airtime, every time. Instantly top-up from anywhere, on any network. Send airtime to anyone across Africa."
        >
           <HoverText>Get started with Chipper Cash</HoverText>
        </SideTextCard>
      </SectionCard>
      <SectionCard css="md:flex-row-reverse flex-col">
        <div className="md:w-2/5 py-10 grid gap-4">
          <Modal
            src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929dbb0062e6e_Chipper-icon1Asset%201.svg"
            content="Pay your bill, but skip the fees."
            css="md:justify-self-start"
          />
          <Modal
            src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9291a3a062e6f_Chipper-icon2Asset%202.svg"
            content="Get all the benefits of online bill pay, with no extra cost."
            css="md:justify-self-center"
          />
          <Modal
            src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9299382062e70_Chipper-icon3Asset%203.svg"
            content="Save time, save money, pay bills on Chipper"
            css="md:justify-self-center"
          />
        </div>
        <SideTextCard
          css="gap-3 md:w-2/5"
          mainText="Pay Your Bills in Just a Few Taps"
          subText="Use Chipper Cash to make instant bill payments. Paying bills is easy, secure, and can all be done from one place. Plus, you’ll never pay additional fees."
        />
      </SectionCard>
      <img
        src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad92900bb062de3_power-your-passions.webp"
        loading="lazy"
        sizes="100vw"
        srcSet="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad92900bb062de3_power-your-passions-p-500.jpeg 500w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad92900bb062de3_power-your-passions-p-800.jpeg 800w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad92900bb062de3_power-your-passions-p-1080.jpeg 1080w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad92900bb062de3_power-your-passions-p-1600.jpeg 1600w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad92900bb062de3_power-your-passions.webp 1920w"
        alt="Power Your Passions and Grow Them into Brilliant Businesses"
      />
      <SectionCard css="md:flex-row-reverse flex-col gap-8 items-center pt-14">
        <img
          src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9299ac0062de5_verified-for-safety.webp"
          loading="lazy"
          sizes="(max-width: 767px) 90vw, (max-width: 991px) 46vw, 47vw"
          srcSet="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9299ac0062de5_verified-for-safety-p-500.png 500w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9299ac0062de5_verified-for-safety.webp 824w"
          alt="Verified for Safety, Security, and Peace of Mind"
          className="md:w-2/5"
        />
        <SideTextCard
          css="gap-3 md:w-2/5"
          mainText="Verified for Safety, Security, and Peace of Mind"
          subText="Verified for Safety, Security, and Peace of Mind"
        />
      </SectionCard>
      <SectionCard css="md:flex-row flex-col gap-8 items-center">
        <img
          src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9297c0f062ddf_pay-school-fees.webp"
          loading="lazy"
          sizes="(max-width: 767px) 90vw, (max-width: 991px) 46vw, 47vw"
          srcSet="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9297c0f062ddf_pay-school-fees-p-500.png 500w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9297c0f062ddf_pay-school-fees-p-800.png 800w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9297c0f062ddf_pay-school-fees.webp 1233w"
          alt="Pay School Fees &amp; Send Pocket Money in Seconds"
          className="md:w-2/5"
        />
        <SideTextCard
          css="gap-3 md:w-2/5"
          mainText="Pay School Fees & Send Pocket Money in Seconds"
          subText="Everyone on Chipper verifies their identity for increased trust. Unique @ChipperTags make it easy to always be 110% sure you’re sending money to the right person."
        ></SideTextCard>
      </SectionCard>
    </section>
  );
}
