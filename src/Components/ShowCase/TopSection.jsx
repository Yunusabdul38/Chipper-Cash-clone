import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";

const appleIcon = <FontAwesomeIcon icon={faAppleAlt} />;
function TopSection() {
  return (
    <>
      <section>
        <div className="px-5 pt-10 md:px-24 md:py-4 text-center">
          <h1 className="text-[#1b0a2d] text-2xl font-semibold">
            It’s the connections between us that power Chipper Cash
          </h1>
          <p className="text-[rgba(27,10,45,.7)] mt-3">
            As millions of customers on Chipper grow to even more, the
            possibilities of what we can achieve together are endless.
          </p>
        </div>
        <div className="bg-style border">
          <img
            src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9297964062de0_chipper-connections-p-2600.jpg"
            className="px-5 py-10 rounded-[50px]"
          />
        </div>
      </section>
      <section className="px-5 py-7 grid gap-3">
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
        <div className="grid gap-3 rounded-lg border  p-3">
            <div className="flex  justify-between items-center">
                <span className="grid">💥 💥 💥 💥 💥</span>
                <img src="data:image/webp;base64,UklGRvoAAABXRUJQVlA4WAoAAAAQAAAAdwAARwAAQUxQSEAAAAABH6CmbQM29QZMYHVERPAIRZGkRsUbMVjAGdLWSmTcyXsEpCqi/xOQ94Gy9lDvTBymLqP3hb6MDlOdicZ4XkIGVlA4IJQAAABwCACdASp4AEgAPm0ylUekIyIhKMgAgA2JZQDVtQA/ADTAfgB+AABKK2FLHYN0dz3DS0Tpep5XDmC8vFfdbfHPiQ/r7StF/I8RycYAAP7u/5gtHjUN5yf2HnEs//EmhwkVxW06V72Hk0Fzc4QWrA6q9fHd99oN8NhYHsALRyA8NgAhObzubGgSWE1Qhl+TgbeEAAAA" className="w-[50px]" alt="nigeria"/>
            </div>
            <p className="text-sm">“Where the 10 stars at? I really wish I could rate this app more! I had a very amazing experience using this platform to get a virtual dollar card for international transactions.”</p>
            <p className="text-xs">Play Store review, 14 April 2023</p>
        </div>
      </section>
      <secton className="bg-girls bg-cover bg-no-repeat bg-center">
        <h1>Get Help, Say Hello</h1>
        <p>Get expert help, advice and tips in-app. Connect with us on our social channels and join the</p>
        <p>#ChipperCash community online.</p>
      </secton>
    </>
  );
}
export default TopSection;
