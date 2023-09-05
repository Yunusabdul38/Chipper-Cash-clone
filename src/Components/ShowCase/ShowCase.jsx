import TopSection from "./TopSection";
function Showcase() {
  return (
    <>
      <section className="md:flex md:justify-between md:items-center bg-white px-5 py-10 md:px-24 md:py-4">
        <img
          src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/646f0c4b802baac4f23097b5_key_visual-p-800.webp"
          alt="phone"
          className="md:w-1/2"
        />
        <div className="mt-8 md:w-1/2">
          <h1 className="font-semibold text-4xl">
            Send Money Directly to Bank and Mobile Money Accounts in 21+ African
            Countries
          </h1>
          <p className="text-[#1b0a2d]">
            Sending money back home just got a whole lot easier with Chipper.
          </p>
          <h3 className="md:mt-20 mt-5 text-purple-600 font-semibold">
            Choose Chipper Cash
          </h3>
        </div>
      </section>
      <section className="bg-[#6642d1] flex justify-between items-center  px-5 md:px-24 overflow-hidden">
        <div className="md:w-auto w-1/2">
          <h1 className="md:font-semibold text-[#acfde4] font-medium md:text-6xl text-lg sm:text-2xl">
            Shop, Stream, and Subscribe Online.
          </h1>
          <p className="font-light text-white md:text-3xl text-xl ">Pay globally with the Chipper Card</p>
        </div>
        <img
          className="md: md:ml-0 ml-20 w-1/2 border-solid"
          src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/646f10177899cb677d8e7510_Group%203705.webp"
          loading="lazy"
          sizes="(max-width: 479px) 97vw, (max-width: 767px) 96vw, (max-width: 991px) 81vw, 62vw"
          width="784"
          alt="person with phone"
          srcSet="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/646f10177899cb677d8e7510_Group%203705-p-500.webp 500w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/646f10177899cb677d8e7510_Group%203705-p-800.webp 800w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/646f10177899cb677d8e7510_Group%203705-p-1080.webp 1080w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/646f10177899cb677d8e7510_Group%203705.webp 1568w"
        />
      </section>
      <TopSection />
    </>
  );
}
export default Showcase;
