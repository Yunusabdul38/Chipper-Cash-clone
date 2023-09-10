import SectionCard from "../../../UI/SectionCard";
import HeaderCard from "../../../UI/HeaderCard";
export default function Header() {
  return (
    <HeaderCard>
      <SectionCard css="px-5 pb-10 xl:px-24 md:px-10 flex-col gap-8 md:flex-row-reverse">
        <img
          src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63cfd27ba43e8f81597c369f_chipper-debit-cards.png"
          loading="lazy"
          sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 47vw"
          srcSet="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63cfd27ba43e8f81597c369f_chipper-debit-cards-p-500.png 500w, https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63cfd27ba43e8f81597c369f_chipper-debit-cards.png 793w"
          alt="Chipper debit cards"
          className="md:w-1/2"
        />
        <div className="grid gap-5">
          <h1 className="text-white capitalize font-semibold text-[10vw] md:text-5xl sm:text-3xl leading-none">
          Chipper Card
          </h1>
          <p className="text-[#c1c4e5] text-[4vw] md:text-lg sm:text-xl leading-none">
          Built for your digital life.
          </p>
          <div className="text-[#acfce3] capitalize inline-flex gap-1 text-base">
            <img
              src="data:image/svg+xml,%3Csvg%20width%3D%221.25rem%22%20height%3D%221.25rem%22%20viewBox%3D%220%200%2067%2080%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M55.757%2042.5438C55.6638%2032.4371%2064.2447%2027.5201%2064.6371%2027.2912C59.7773%2020.3829%2052.2449%2019.439%2049.5979%2019.3638C43.2716%2018.7147%2037.135%2023.0546%2033.9123%2023.0546C30.6253%2023.0546%2025.6627%2019.4265%2020.3141%2019.5331C13.4313%2019.6366%206.99241%2023.5219%203.46098%2029.5552C-3.82702%2041.8571%201.60843%2059.9352%208.59088%2069.8789C12.0837%2074.7488%2016.1651%2080.1864%2021.5073%2079.9951C26.7337%2079.785%2028.6859%2076.7464%2034.993%2076.7464C41.2421%2076.7464%2043.0754%2079.9951%2048.5237%2079.8728C54.1328%2079.785%2057.6642%2074.9809%2061.0349%2070.067C65.0712%2064.4853%2066.6922%2058.9882%2066.7566%2058.7059C66.6247%2058.662%2055.8632%2054.6576%2055.757%2042.5438Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3Cpath%20d%3D%22M45.4651%2012.8224C48.276%209.39495%2050.1994%204.73197%2049.6655%200C45.5969%200.175607%2040.5088%202.74385%2037.5788%206.09606C34.9866%209.05001%2032.6709%2013.8917%2033.2691%2018.445C37.8394%2018.7774%2042.5318%2016.1966%2045.4651%2012.8224Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              alt="apple store"
              className="w-[20px]"
            />
            apple store
            <span className="ml-3 inline-flex gap-1">
              <img
                src="data:image/svg+xml,%3Csvg%20width%3D%221.25rem%22%20height%3D%221.25rem%22%20viewBox%3D%220%200%2075%2080%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1.39589%203.42281C0.511701%204.32525%200%205.73027%200%207.54983V72.4523C0%2074.2719%200.511701%2075.6769%201.39589%2076.5794L1.61412%2076.7775L38.9158%2040.423V39.5645L1.61412%203.21004L1.39589%203.42281Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3Cpath%20d%3D%22M55.8509%2052.5472L43.4308%2040.4229V39.5645L55.8659%2027.4402L56.1443%2027.598L70.8709%2035.7676C75.0736%2038.0861%2075.0736%2041.9013%2070.8709%2044.2345L56.1443%2052.3895L55.8509%2052.5472Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3Cpath%20d%3D%22M53.8869%2054.647L41.1733%2042.2513L3.65338%2078.8369C5.04928%2080.2676%207.32561%2080.44%209.91423%2079.0093L53.8869%2054.647Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3Cpath%20d%3D%22M53.8869%2025.3405L9.91423%200.978226C7.32561%20-0.437802%205.04928%20-0.265389%203.65338%201.16531L41.1733%2037.7362L53.8869%2025.3405Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
                alt="google play"
                className="w-[20px]"
              />
              google play
            </span>
          </div>
        </div>
      </SectionCard>
    </HeaderCard>
  );
}
