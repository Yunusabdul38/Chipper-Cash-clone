function NavList({img,maintext,subtext,imgalt}){
    return(
        <div className="flex gap-2">
          <img src={img} alt={imgalt} className="w-7"/>
          <div className="grid gap-1">
            <p className="md:text-lg capitalize text-xl md:text-[#160042]">{maintext}</p>
            <p className="capitalize text-sm text-[#c1c4e5] md:text-[#656787]">{subtext}</p>
          </div>
        </div>
    )
}
export default NavList