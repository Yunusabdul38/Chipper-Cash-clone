import NavList from "./NavList";
function NavCategory({ categoryName,img,maintext,subtext,imgalt}) {
  return (
    <section>
      <div className="grid gap-1">
        <h3 className="capitalize mb-3 text-[#c1c4e5] md:text-[#637e9e] text-sm ">
          {categoryName}
        </h3>
        <section className="grid gap-6">
          <NavList img={img} maintext={maintext} subtext={subtext} imgalt={imgalt}/>
        </section>
      </div>
    </section>
  );
}
export default NavCategory;