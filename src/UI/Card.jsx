import PropTypes from "prop-types"

Card.propTypes={
  children:PropTypes.array,
  style:PropTypes.string
}
function Card ({children,style}){
    return(
        <div className={`${style} mt-2  xl:fixed rounded-3xl md:p-5 sm:p-5 xl:bg-[#fff] bg-[#202654]  text-white  overflow-y-scroll grid xl:overflow-hidden `}>{children}</div>
    )
}
export default Card