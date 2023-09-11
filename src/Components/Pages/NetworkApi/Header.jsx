import HeaderCard from "../../../UI/HeaderCard";
import Button from "../../../UI/Button"
export default function Header() {
  return (
    <HeaderCard>
      <div className=" md:w-3/5 grid gap-5 px-5 py-20 xl:px-24 md:px-10">
        <h1 className="text-white capitalize font-semibold text-[10vw] md:text-5xl sm:text-3xl leading-none">
          Power your Payments in Africa
        </h1>
        <p className="text-[#c1c4e5] text-[4vw] md:text-lg sm:text-xl leading-none">
        Chipper Network API is a payment method that gives you access to 5Mn+ KYC verified customers. We empower you to accept payments and send payouts across all our markets.

        </p>
        <div className="text-[#acfce3] capitalize inline-flex gap-3 text-base">
            <Button text="get started"/>
            <Button text="how it works" />
        </div>
      </div>
    </HeaderCard>
  );
}
