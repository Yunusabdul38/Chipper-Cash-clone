
function Card ({children}){
    return(
        <div className="w-full mt-2 md:mt-12 md:fixed md:right-20 rounded-3xl md:p-5 sm:p-5 md:bg-white bg-[#202654] md:grid-cols-3 sm:grid-cols-2 text-white h-[400px] overflow-y-scroll grid gap-5 md:max-w-[60%] md:overflow-hidden border">{children}</div>
    )
}
export default Card