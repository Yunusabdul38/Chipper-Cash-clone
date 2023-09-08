import Testimony from "./Testimony/Testimony";
import bgImage from "./styleBg.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";

const appleIcon = <FontAwesomeIcon icon={faAppleAlt} />;
function TopSection() {
  return (
    <>
      <section className="mt-10 md:px-48">
        <div className=" px-5 pt-10 md:px-24 md:py-4 text-center">
          <h1 className="text-[#1b0a2d] text-2xl font-semibold">
            It’s the connections between us that power Chipper Cash
          </h1>
          <p className="text-[rgba(27,10,45,.7)] mt-3">
            As millions of customers on Chipper grow to even more, the
            possibilities of what we can achieve together are endless.
          </p>
        </div>
        <div className="h-[500px] bg-center border bg-style" style={{backgroundImage:`url(${bgImage})`}}>
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
      <section className=" px-5 pt-20 pb-10 md:px-24 md:py-4 bg-girls bg-cover">
      <h1>Get Help, Say Hello</h1>
        <p>
          Get expert help, advice and tips in-app. Connect with us on our social
          channels and join the
        </p>
        <p>#ChipperCash community online.</p>
      </section>
    </>
  );
}
export default TopSection;
