import Testimony from "./Testimony/Testimony";
import bgImage from "./styleBg.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";

const appleIcon = <FontAwesomeIcon icon={faAppleAlt} />;
function TopSection() {
  return (
    <>
      <section className="mb-20 mt-10 md:px-48">
        <div className=" px-5 pt-10 md:px-24 md:py-4 text-center">
          <h1 className="text-[#1b0a2d] text-2xl font-semibold">
            It’s the connections between us that power Chipper Cash
          </h1>
          <p className="text-[rgba(27,10,45,.7)] mt-3">
            As millions of customers on Chipper grow to even more, the
            possibilities of what we can achieve together are endless.
          </p>
        </div>
        <div className="h-[500px] bg-center  bg-style" style={{backgroundImage:`url(${bgImage})`}}>
        <img
          src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9297964062de0_chipper-connections-p-800.jpg"
          className="px-5 py-10 rounded-[50px] mx-auto"
        />
        </div>
      </section>
      <section className="gap-8 md:grid md:grid-cols-2 items-center md:px-20 px-5 py-7 grid">
        <div>
          <p className="text-[#1b0a2d] font-medium">
            Community powered by over 5 million users, and we are just getting
            started.
          </p>
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-[#1b0a2d] font-semibold text-3xl">
                4.5 <span className="font-normal text-xl">out of 5</span>
              </h1>
              <div className="text-[#1b0a2d] font-semibold text-xl">
                {appleIcon}{" "}
                <span className="capitalize text-base font-medium">
                  google play
                </span>
              </div>
            </div>
            <div>
              <h1 className="text-[#1b0a2d] font-semibold text-3xl">
                4.4 <span className="font-normal text-xl">out of 5</span>
              </h1>
              <div className="text-[#1b0a2d] font-semibold text-xl">
                {appleIcon}{" "}
                <span className="capitalize text-base font-medium">
                  apple store
                </span>
              </div>
            </div>
          </div>
        </div>
        <Testimony />
      </section>
      <section className="bg-black text-[#fff] grid gap-4 md:gap-8 px-5 pt-20 pb-10 md:px-24  bg-girls bg-cover bg-center bg-no-repeat md:py-20">
      <h1 className="text-3xl font-medium">Get Help, Say Hello</h1>
        <p className="md:w-[35%]">
          Get expert help, advice and tips in-app. Connect with us on our social
          channels and join the <br/>
          #ChipperCash community online.
        </p>
        <div className="md:grid-cols-6 grid grid-cols-3 gap-6 w-2/3 md:w-[35%]">
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
