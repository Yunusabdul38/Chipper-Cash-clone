import Testimony from "./Testimony/Testimony";
import bgImage from "./styleBg.svg"
function TopSection() {
  return (
    <>
      <section className=" px-5 pt-5 xl:px-24 md:px-10">
        <div className=" text-center">
          <h1 className="text-[#1b0a2d] text-2xl font-semibold text-[5vw] md:text-3xl sm:text-2xl leading-none">
            It’s the connections between us that power Chipper Cash
          </h1>
          <p className="text-[rgba(27,10,45,.7)] mt-3">
            As millions of customers on Chipper grow to even more, the
            possibilities of what we can achieve together are endless.
          </p>
        </div>
        <div className=" bg-center  bg-style" style={{backgroundImage:`url(${bgImage})`}}>
        <img
          src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9297964062de0_chipper-connections-p-800.jpg"
          className="px-5 pt-10 mx-auto"
        />
        </div>
      </section>
      <section className="gap-8 md:grid md:grid-cols-2 items-center px-5 pt-8 xl:px-24 md:px-10 pb-5 grid">
        <div className="grid gap-10">
          <p className="text-[#1b0a2d] font-medium flex flex-col gap-3">
          <span className="w-7 h-1 rounded bg-[#6945d8]"></span>
            Community powered by over 5 million users, and we are just getting
            started.
          </p>
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-[#1b0a2d] font-semibold text-3xl">
                4.5 <span className="font-normal text-xl">out of 5</span>
              </h1>
              <div className="text-[#1b0a2d] font-semibold text-xl flex gap-3">
              <img
                  src="data:image/svg+xml,%3Csvg%20width%3D%221.25rem%22%20height%3D%221.25rem%22%20viewBox%3D%220%200%2075%2080%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1.39589%203.42281C0.511701%204.32525%200%205.73027%200%207.54983V72.4523C0%2074.2719%200.511701%2075.6769%201.39589%2076.5794L1.61412%2076.7775L38.9158%2040.423V39.5645L1.61412%203.21004L1.39589%203.42281Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3Cpath%20d%3D%22M55.8509%2052.5472L43.4308%2040.4229V39.5645L55.8659%2027.4402L56.1443%2027.598L70.8709%2035.7676C75.0736%2038.0861%2075.0736%2041.9013%2070.8709%2044.2345L56.1443%2052.3895L55.8509%2052.5472Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3Cpath%20d%3D%22M53.8869%2054.647L41.1733%2042.2513L3.65338%2078.8369C5.04928%2080.2676%207.32561%2080.44%209.91423%2079.0093L53.8869%2054.647Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3Cpath%20d%3D%22M53.8869%2025.3405L9.91423%200.978226C7.32561%20-0.437802%205.04928%20-0.265389%203.65338%201.16531L41.1733%2037.7362L53.8869%2025.3405Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
                  alt="google play"
                />
                <span className="capitalize text-base font-medium">
                  google play
                </span>
              </div>
            </div>
            <div>
              <h1 className="text-[#1b0a2d] font-semibold text-3xl">
                4.4 <span className="font-normal text-xl">out of 5</span>
              </h1>
              <div className="text-[#1b0a2d] font-semibold text-xl flex gap-4">
              <img
                src="data:image/svg+xml,%3Csvg%20width%3D%221.25rem%22%20height%3D%221.25rem%22%20viewBox%3D%220%200%2067%2080%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M55.757%2042.5438C55.6638%2032.4371%2064.2447%2027.5201%2064.6371%2027.2912C59.7773%2020.3829%2052.2449%2019.439%2049.5979%2019.3638C43.2716%2018.7147%2037.135%2023.0546%2033.9123%2023.0546C30.6253%2023.0546%2025.6627%2019.4265%2020.3141%2019.5331C13.4313%2019.6366%206.99241%2023.5219%203.46098%2029.5552C-3.82702%2041.8571%201.60843%2059.9352%208.59088%2069.8789C12.0837%2074.7488%2016.1651%2080.1864%2021.5073%2079.9951C26.7337%2079.785%2028.6859%2076.7464%2034.993%2076.7464C41.2421%2076.7464%2043.0754%2079.9951%2048.5237%2079.8728C54.1328%2079.785%2057.6642%2074.9809%2061.0349%2070.067C65.0712%2064.4853%2066.6922%2058.9882%2066.7566%2058.7059C66.6247%2058.662%2055.8632%2054.6576%2055.757%2042.5438Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3Cpath%20d%3D%22M45.4651%2012.8224C48.276%209.39495%2050.1994%204.73197%2049.6655%200C45.5969%200.175607%2040.5088%202.74385%2037.5788%206.09606C34.9866%209.05001%2032.6709%2013.8917%2033.2691%2018.445C37.8394%2018.7774%2042.5318%2016.1966%2045.4651%2012.8224Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
                alt="apple store"
              />
                <span className="capitalize text-base font-medium">
                  apple store
                </span>
              </div>
            </div>
          </div>
        </div>
        <Testimony />
      </section>
      <section className="mt-10 bg-black text-[#fff] grid gap-4 md:gap-8 px-5 pt-40 pb-10 bg-girls bg-cover bg-center bg-no-repeat md:py-20 xl:px-24 md:px-10">
      <h1 className="text-[7vw] md:text-3xl sm:text-2xl leading-none font-bold">Get Help, Say Hello</h1>
        <p className="text-[5vw] md:text-xl sm:text-[4vw] leading-none md:w-[50%]">
          Get expert help, advice and tips in-app. Connect with us on our social
          channels and join the <br/>
          #ChipperCash community online.
        </p>
        <div className="sm:grid-cols-6 grid grid-cols-3 gap-6 w-2/3 sm:w-full md:w-[35%]">
            <img
            src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/647084316ca1612c47df448e_Vector.svg"
            alt="twitter"
            className="w-10 grayscale hover:grayscale-0 transition duration-200 ease-out"
          />
          <img
            src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/647083e36ca1612c47df069a_instagram%201.svg"
            alt="instagram"
            className="w-10 grayscale hover:grayscale-0 transition duration-200 ease-out"
          />
          <img
            src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/64708431a61024d9b309b970_Vector-3.svg"
            alt="facebook"
            className="w-10 grayscale hover:grayscale-0 transition duration-200 ease-out"
          />
          <img
            src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/64708431deace073b84f0663_Vector-2.svg"
            alt="youtube"
            className="w-10 grayscale hover:grayscale-0 transition duration-200 ease-out"
          />
          <img
            src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/647084856201b89f5f440abf_Isolation_Mode.svg"
            alt="tiktok"
            className="w-10 grayscale hover:grayscale-0 transition duration-200 ease-out"
          />
          <img
            src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/647084313f6ba1683123aee4_Group-4.svg"
            alt="linkdlin"
            className="w-10 grayscale hover:grayscale-0 transition duration-200 ease-out"
          />
        </div>
      </section>
    </>
  );
}
export default TopSection;
