function HeaderEndSection() {
  return (
    <section className="px-5 xl:px-24 pb-20 md:px-10">
      <h3 className="text-[#c1c4e5] pb-6 font-normal text-xl flex flex-col gap-2">
        <span className="w-7 h-1 rounded bg-white"></span>
        Chipper Cash key figures
      </h3>
      <section className="flex justify-between items-baseline gap-6 flex-wrap">
        <div className="md:text-center">
          <h2 className="text-2xl">5+ million</h2>
          <p className="text-[#c1c4e5] text-sm">users</p>
        </div>
        <div className="md:text-center">
          <h2 className="text-2xl">600,000+</h2>
          <p className="text-[#c1c4e5] text-sm">Visa Cards Issued</p>
        </div>
        <div className="md:text-center">
          <h2 className="text-2xl">6,000+</h2>
          <p className="text-[#c1c4e5] text-sm">US public companies to invest in</p>
        </div>
        <div className="md:text-center">
          <h2 className="text-2xl">$1.5+ billion</h2>
          <p className="text-[#c1c4e5] text-sm">Total process volume per quarter</p>
        </div>
      </section>
    </section>
  );
}
export default HeaderEndSection;
